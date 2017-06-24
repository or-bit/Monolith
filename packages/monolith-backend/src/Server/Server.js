const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const LifeCycle = require('../LifeCycle/LifeCycle');
const consts = require('monolith-consts');

/**
 * @class Manage the app and the socket connection.
 * @property {Object} App
 * @property {Object} server
 * @property {Object} socket
 */
class Server {
    /**
     * Create a server.
     * @property {Object} App - Create an express app.
     * @property {Object} server - Create an http server associated with the express app.
     * @property {Object} socket - Enable web socket request.
     */
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.socket = socketIO(this.server);
    }

    /**
     * Enable server function giving the assigned port.
     * @param port - Server port.
     */
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
                        returnMessage = 'Warning: Store lifetime disabled';
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

    /**
     * Close server.
     */
    close() {
        this.socket.close();
        this.server.close();
    }

    /**
     * Manage the connection.
     * @param functionToCall - Specify function to call in connection.
     * @param functionArgs - Define argument of fanction.
     */
    onConnection(functionToCall, functionArgs) {
        this.socket.on(
          'connection',
          clientSocket => functionToCall(clientSocket, functionArgs)
        );
    }

    /**
     * Manage the disconnection.
     * @param functionToCall - Specify function to call in disconnection.
     * @param functionArgs - Define argument of fanction.
     */
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

    /**
     * Return socket value.
     */
    getSocket() {
        return this.socket;
    }

    /**
     * Return express app.
     */
    getExpress() {
        return this.app;
    }

    /**
     * Return http server.
     */
    getHTTPServer() {
        return this.server;
    }

    /**
     * Set server directory from path.
     * @param path
     * @param dir
     */
    serveStaticFiles(path, dir) {
        this.app.use(path, express.static(dir));
    }
}

exports.create = () => new Server();
