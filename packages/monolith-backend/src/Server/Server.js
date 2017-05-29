const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

class Server {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.socket = socketIO(this.server);
    }

    open(port) {
        this.server.listen(port);
    }

    close() {
        this.server.close();
    }

    onConnection(functionToCall, functionArgs) {
        this.socket.on(
          'connection',
          clientSocket => functionToCall(clientSocket, functionArgs)
        );
    }

    onDisconnection(functionToCall, functionArgs) {
        this.socket.on(
          'disconnect',
          clientSocket => functionToCall(clientSocket, functionArgs)
        );
    }

    register(event, functionToCall, clientSocket) {
        if (typeof functionToCall !== 'function') {
            /* eslint-disable max-len*/
            throw new Error(`Expected function parameter, but received ${typeof functionToCall}`);
        }
        if (!clientSocket) {
            this.socket.on(event, data => functionToCall(data));
        } else {
            clientSocket.on(event, data => functionToCall(data));
        }
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
