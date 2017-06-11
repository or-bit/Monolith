const assert = require('chai').assert;
const expect = require('chai').expect;
const ping = require('tcp-ping');
const spawn = require('child_process').spawn;
const sinon = require('sinon');
const consts = require('monolith-consts');
const Server = require('./Server');
const common = require('./Server.config.test');
const LifeCycle = require('../Model/LifeCycle/LifeCycle');

const sandbox = sinon.sandbox.create();

const port = common.port;
const expectedAnswer = common.clientAnswer;

describe('Server Test Suite', () => {
    let server;

    const createFakeClients = (clientScript, args) => {
        const client = spawn(
            'node',
            [clientScript, args],
            { cwd: __dirname }
        );

        client.stdout.on(
            'data',
            data => console.log(data.toString())
        );

        client.stderr.on(
            'data',
            data => new Error(data.toString())
        );

        return client;
    };

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

    it(`should listen correctly to port ${port}`, (done, fail) => {
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

    it('should respond to disconnection', () => {
        let shouldBecomeTrue = false;
        const fun = () => true;
        server.onDisconnection(() => {
            shouldBecomeTrue = fun();
            assert.isTrue(shouldBecomeTrue);
        });
    });

    it('should throw Error when not passing function', () => {
        expect(() => server.register('fail1')).to.throw(Error);
        expect(() => server.register('fail2', {})).to.throw(Error);
    });

    it('should throw Error when emitting to undefined client Socket', () => {
        expect(() => server.emit('fail3')).to.throw(Error);
    });

    describe('client who wants to connect to the server', () => {
        let client;

        after(() => {
            client.kill();
        });

        it('should be able to communicate with it', (done) => {
            server.onConnection((clientSocket) => {
                server.register('myIdentity', (clientData) => {
                    assert.equal(clientData, expectedAnswer);
                    clientSocket.disconnect();
                    done();
                }, clientSocket);

                server.emit('identityCheck', clientSocket);
            });

            client = createFakeClients('./Client.test.js');
        });
    });

    describe('clients who want to connect to the server', () => {
        let testClient1;
        let testClient2;

        after(() => {
            testClient1.kill();
            testClient2.kill();
        });

        it('should be able to communicate with it', (done) => {
            let thanksReceived = 0;
            const expectedThanks = 2;
            server.onConnection((clientSocket) => {
                server.register('myIdentity', (clientData) => {
                    assert.equal(clientData, expectedAnswer);
                    server.broadcast('welcome', clientSocket.id);
                }, clientSocket);

                server.register('welcomeReply', (clientData) => {
                    if (clientData.toString() === 'thanks') {
                        thanksReceived += 1;
                    }
                    if (thanksReceived === expectedThanks) { done(); }
                }, clientSocket);

                server.emit('identityCheck', clientSocket);
            });

            testClient1 = createFakeClients('./Client.test.js');
            testClient2 = createFakeClients('./Client.test.js');
        }).timeout(5000);
    });

    describe('fake bubble who wants to connect to the server', () => {
        describe('with correct lifecycle params', () => {
            let client;

            beforeEach(() => {
                sandbox.stub(LifeCycle.prototype, 'start').resolves();
            });

            afterEach(() => {
                sandbox.restore();
                client.kill();
            });

            it('should be able to communicate with it', (done) => {
                const bubbleRoom = server.getSocket().of(consts.BUBBLE_ROOM);
                bubbleRoom.on('connect', (clientSocket) => {
                    clientSocket.on(
                        common.lifeCycleOk, () => done());
                });


                client = createFakeClients('./Bubble.test.js', 1);
            });
        });

        describe('with wrong lifecycle params', () => {
            let client;

            beforeEach(() => {
                sandbox.stub(LifeCycle.prototype, 'start').resolves();
            });

            afterEach(() => {
                sandbox.restore();
                client.kill();
            });

            it('should be able to communicate with it', (done) => {
                const bubbleRoom = server.getSocket().of(consts.BUBBLE_ROOM);
                bubbleRoom.on('connect', (clientSocket) => {
                    clientSocket.on(
                        common.lifeCycleOk, () => done());
                });

                server.onDisconnection(() => console.log('disconnected'));

                client = createFakeClients('./Bubble.test.js', 0);
            }).timeout(5000);
        });

        describe('with failing lifecycle', () => {
            let client;

            beforeEach(() => {
                sandbox.stub(LifeCycle.prototype, 'start').rejects();
            });

            afterEach(() => {
                sandbox.restore();
                client.kill();
            });

            it('should be able to communicate with it', (done) => {
                const bubbleRoom = server.getSocket().of(consts.BUBBLE_ROOM);
                bubbleRoom.on('connect', (clientSocket) => {
                    clientSocket.on(
                        common.lifeCycleOk, () => done());
                });


                client = createFakeClients('./Bubble.test.js', 1);
            });
        });
    });
});
