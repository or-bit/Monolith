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

  register(event, functionToCall, functionArgs) {
    this.socket.on(event, functionToCall(functionArgs));
  }

  emit(event, payload) {
    this.socket.emit(event, payload);
  }


  getSocket() {
    return this.socket;
  }
}

exports.create = () => new Server();
