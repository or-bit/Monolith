const chaiAsPromised = require('chai-as-promised');
const chai = require('chai');
const RestApi = require('./RESTAPI');
const nock = require('nock');

const expect = chai.use(chaiAsPromised).expect;

describe('REST APIs Caller Test Suite', () => {
    const testUrl = 'http://fake.server';
    const okEndPoint = '/ok';
    const errorEndPoint = '/error';

    const okUrl = `${testUrl + okEndPoint}`;
    const errorUrl = `${testUrl + errorEndPoint}`;

    describe('GET method', () => {
        before(() => {
            // mock fake Server
            nock(testUrl).get(okEndPoint).reply(200, { success: true });
            nock(testUrl).get(errorEndPoint).reply(500);
        });

        it('should be fulfilled',
            () => expect(RestApi.get(okUrl)).to.be.fulfilled);

        it('should be rejected',
            () => expect(RestApi.get(errorUrl)).to.be.rejected);
    });

    describe('POST method', () => {
        before(() => {
        // mock fake Server
            nock(testUrl).post(okEndPoint).reply(200, { success: true });
            nock(testUrl).post(errorEndPoint).reply(500);
        });

        it('should be successful',
            () => expect(RestApi.post(okUrl)).to.be.fulfilled);

        it('should be rejected',
            () => expect(RestApi.post(errorUrl)).to.be.rejected);
    });

    describe('PUT method', () => {
        before(() => {
        // mock fake Server
            nock(testUrl).put(okEndPoint).reply(200, { success: true });
            nock(testUrl).put(errorEndPoint).reply(500);
        });

        it('should be successful',
            () => expect(RestApi.put(okUrl)).to.be.fulfilled);

        it('should be rejected',
            () => expect(RestApi.put(errorUrl)).to.be.rejected);
    });


    describe('DELETE method', () => {
        before(() => {
        // mock fake Server
            nock(testUrl).delete(okEndPoint).reply(200, { success: true });
            nock(testUrl).delete(errorEndPoint).reply(500);
        });

        it('should be successful',
            () => expect(RestApi.delete(okUrl)).to.be.fulfilled);

        it('should be rejected',
            () => expect(RestApi.delete(errorUrl)).to.be.rejected);
    });
});
