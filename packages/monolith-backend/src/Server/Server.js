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
                const timeNumber = Number(time);
                if (timeNumber > 0) {
                    new LifeCycle(timeNumber).start().then(() => {
                        console.log('bubble lifecycle completed... ');
                        console.log('emitting event to bubble');
                        clientSocket.emit(consts.LIFECYCLE_EVENT_DONE);
                    }).catch((error) => {
                        console.error(error);
                        clientSocket.emit(consts.LIFECYCLE_EVENT_FAILED, error);
                    });
                } else {
                    let returnMessage;
                    if (timeNumber === 0) {
                        returnMessage = 'Warning: Bubble lifetime disabled';
                    } else {
                        returnMessage = 'Invalid time interval';
                    }
                    console.error(returnMessage);
                    clientSocket.emit(
                        consts.LIFECYCLE_EVENT_FAILED,
                        returnMessage
                    );
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

    getExpress() {
        return this.app;
    }

    getHTTPServer() {
        return this.server;
    }

    serveStaticFiles(path, dir) {
        this.app.use(path, express.static(dir));
    }
}

exports.create = () => new Server();
