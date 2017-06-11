const io = require('socket.io-client');
const commonConfig = require('./Server.config.test');
const consts = require('monolith-consts');

// const url = commonConfig.url;
const url = "https://cryptic-headland-97852.herokuapp.com:3456/";

const socket = io.connect(`${url}/${consts.BUBBLE_ROOM}`);

const arg = process.argv.slice(2)[0];

socket.once('connect', () => {
    console.log('connected to server');
    console.log(`emitting lifecycle with time ${arg}`);
    socket.emit(consts.LIFECYCLE_EVENT, arg);

    socket.once(consts.LIFECYCLE_EVENT_DONE, () => {
        console.log('lifecycle-end received, emitting lifecycle-ok');
        socket.emit(commonConfig.lifeCycleOk);
        socket.disconnect();
    });

    socket.once(consts.LIFECYCLE_EVENT_FAILED, (error) => {
        console.log(error);
        socket.emit(commonConfig.lifeCycleOk);
        socket.disconnect();
    });
});
