const socketClient = require('socket.io-client');
const commonConfig = require('./common.test');

const url = commonConfig.url;
const expectedAnswer = commonConfig.clientAnswer;

const client = socketClient.connect(url);

client.on('connect', () => {
    console.log('connected');
    console.log(client.id);
    client.on('identityCheck', () => {
        console.log('identityCheck received');
        console.log('myIdentity emitting');
        client.emit('myIdentity', expectedAnswer);
    });
});
