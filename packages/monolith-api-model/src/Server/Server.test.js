const assert = require('chai').assert;
const ping = require('tcp-ping');
const spawn = require('child_process').spawn;
const Server = require('./Server');
const common = require('./common.test');

const port = common.port;
const expectedAnswer = common.clientAnswer;

describe('Server Test Suite', () => {
    let server;

    beforeEach(() => {
        server = Server.create();
        server.open(port);
    });

    afterEach(() => {
        server.close();
    });

    it('beforeEach should create a new Server instance', () => {
        assert.isNotNull(server);
        assert.isDefined(server);
    });

    it('should listen correctly to port 3456', (done, fail) => {
        ping.ping({ port, attempts: 1 }, (err, data) => {
            if (err) {
                console.error(err);
                fail();
            }
            assert.isDefined(data.avg);
            assert.isNumber(data.avg);
            done();
        });
    });

    it('should return socket', () => {
        assert.isDefined(server.getSocket());
        assert.isNotNull(server.getSocket());
    });

    describe('client who wants to connect to the server', () => {
        let testClient;

        after(() => {
            testClient.kill();
        });

        it('should be able to communicate with it', (done) => {
            server.onConnection(() => {
                server.emit('identityCheck');
            });

            server.register('myIdentity', (clientData) => {
                assert.equal(clientData, expectedAnswer);
                done();
            });

            testClient = spawn(
              'node',
              ['./Client.test.js'],
              { cwd: __dirname }
            );
            testClient.stderr.on(
              'data',
              data => done(new Error(data.toString()))
            );
        });
    });
});
