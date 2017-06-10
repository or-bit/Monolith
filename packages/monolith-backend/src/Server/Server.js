const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const LifeCycle = require('../Model/LifeCycle/LifeCycle');
const consts = require('monolith-consts');

class Server {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.socket = socketIO(this.server);
    }

    open(port) {
        this.server.listen(port);
        const room = this.socket.of(consts.BUBBLE_ROOM);
        room.on('connection', (clientSocket) => {
            console.log('bubble connected');
            clientSocket.on(consts.LIFECYCLE_EVENT, (time) => {
                if (time > 0) {
                    new LifeCycle(time).start().then(() => {
                        console.log('bubble lifecycle completed... ');
                        console.log('emitting event to bubble');
                        clientSocket.emit(consts.LIFECYCLE_EVENT_DONE);
                    }).catch((error) => {
                        console.error(error);
                        clientSocket.emit(consts.LIFECYCLE_EVENT_FAILED, error);
                    });
                } else {
                    const error = 'Invalid time interval';
                    console.error(error);
                    clientSocket.emit(consts.LIFECYCLE_EVENT_FAILED, error);
                }
            });
        });
    }

    close() {
        this.socket.close();
        this.server.close();
    }

    onConnection(functionToCall, functionArgs) {
        this.socket.on(
          'connection',
          clientSocket => functionToCall(clientSocket, functionArgs)
        );
    }

    onDisconnection(functionToCall, functionArgs) {
        this.socket.on('connection', (clientSocket) => {
            clientSocket.on(
                'disconnect',
                () => functionToCall(clientSocket, functionArgs)
            );
        });
    }

    register(event, functionToCall) {
        if (typeof functionToCall !== 'function') {
            /* eslint-disable max-len*/
            throw new Error(`Expected function parameter, but received ${typeof functionToCall}`);
        }
        this.socket.on('connection', (clientSocket) => {
            clientSocket.on(event, data => functionToCall(data));
        });
    }

    /**
     * Emit the specified event, with the specified payload, to the specified client
     * @param event
     * @param clientSocket Socket of the client to send the event
     * @param payload
     */
    /* eslint-disable class-methods-use-this */
    emit(event, clientSocket, payload) {
        if (!clientSocket) {
            throw new Error('Client Socket is undefined.');
        }
        clientSocket.emit(event, payload);
    }

  /**
   * Emit the specified event, with the specified payload, to ALL connected clients.
   * @param event
   * @param payload
   */
    broadcast(event, payload) {
        this.socket.sockets.emit(event, payload);
    }

    getSocket() {
        return this.socket;
    }
}

exports.create = () => new Server();
