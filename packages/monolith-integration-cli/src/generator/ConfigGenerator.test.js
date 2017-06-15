const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const configurationGenerator = require('./ConfigGenerator');

const expect = chai.use(chaiAsPromised).expect;
chai.use(sinonChai);

describe('ConfigGenerator Test Suite', () => {
    const fakeRoutesCollection = {
        serialize: () => {},
    };

    const wrongCollection = {};


    describe('when requiring object', () => {
        it('should get 2 functions and 1 object', () => {
            expect(configurationGenerator.generateAllCode).to.be.a('function');
            expect(
              configurationGenerator.generateRoutesConfiguration
            ).to.be.a('function');
            expect(configurationGenerator.defaultJSONConfiguration)
              .to.be.an('object');
        });
    });

    describe('when calling generateRoutesConfiguration', () => {
        const serializeStub = sinon.stub(fakeRoutesCollection, 'serialize');

        beforeEach(() => {
            serializeStub.reset();
        });

        after(() => {
            serializeStub.restore();
        });

        it('should resolve when everything is ok', () => {
            const fakeJSONConfig = { foo: 'bar' };
            const promise = configurationGenerator.generateRoutesConfiguration(
              fakeRoutesCollection,
              fakeJSONConfig
            );
            expect(promise).to.eventually.be.resolved;
            expect(serializeStub).to.have.been.calledWith(fakeJSONConfig);
        });

        it('should reject when passing null or undefined', () => {
            const promise = configurationGenerator
              .generateRoutesConfiguration(null);
            expect(promise).to.eventually.be.rejected;
        });

        it('shuold reject when passing the wrong object', () => {
            const promise = configurationGenerator
              .generateRoutesConfiguration(wrongCollection);
            expect(promise).to.eventually.be.rejected;
        });
    });

    describe('when calling generate', () => {
        it('should resolve when everything is ok', () => {
            const promise = configurationGenerator.generateAllCode(
              fakeRoutesCollection
            );
            expect(promise).to.eventually.be.resolved;
        });

        it('should reject when generateRoutesConfiguration fails', () => {
            const promise = configurationGenerator.generateAllCode(
              undefined
            );
            expect(promise).to.eventually.be.rejected;
        });
    });
});
