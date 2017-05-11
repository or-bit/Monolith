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
        this.socket.on('connection', () => functionToCall(functionArgs));
    }

    register(event, functionToCall, broadcast) {
        if (broadcast) {
            this.socket.on(event, data => functionToCall(data));
        } else {
            this.socket.on('connection', (clientSocket) => {
                clientSocket.on(event, data => functionToCall(data));
            });
        }
    }

    emit(event, payload) {
        this.socket.emit(event, payload);
    }

    getSocket() {
        return this.socket;
    }
}

exports.create = () => new Server();
