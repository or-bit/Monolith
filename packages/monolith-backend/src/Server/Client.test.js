const io = require('socket.io-client');
const commonConfig = require('./Server.config.test');

const url = commonConfig.url;
const expectedAnswer = commonConfig.clientAnswer;

const socket = io.connect(url);

socket.on('connect', () => {
    socket.on('identityCheck', () => {
        console.log('emitting myIdentity');
        socket.emit('myIdentity', expectedAnswer);
    });

    socket.on('welcome', (socketId) => {
        if (socketId === socket.id) {
            socket.emit('welcomeReply', 'thanks');
            socket.disconnect();
        }
    });
});
