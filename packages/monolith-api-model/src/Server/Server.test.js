const assert = require('chai').assert;
const server = require('./Server');
const ping = require('tcp-ping');

const port = 3456;

describe('Basic Server functionalities', () => {
  let testServer;

  beforeEach(() => {
    testServer = server.create();
  });

  afterEach(() => {
    testServer.close();
  });

  it('beforeEach should create a new Server instance', () => {
    assert.isNotNull(testServer);
    assert.isDefined(testServer);
  });

  it('should listen correctly to port 3456', (done, fail) => {
    testServer.open(port);
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
    assert.isDefined(testServer.getSocket());
    assert.isNotNull(testServer.getSocket());
  });
});
