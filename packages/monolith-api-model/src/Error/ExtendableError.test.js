const expect = require('chai').expect;
const ExtendableError = require('./ExtendableError');

class ExtendableTestError extends ExtendableError {}

describe('ExtendableError Test Suite', () => {
    let error;

    before(() => {
        error = new ExtendableTestError();
    });

    it('should be an instance of Error', () => {
        expect(error).to.be.an.instanceOf(Error);
    });

    it('should be an instance of ExtendableError', () => {
        expect(error).to.be.an.instanceOf(ExtendableError);
    });

    it('should be an instance of ExtendableTestError', () => {
        expect(error).to.be.an.instanceOf(ExtendableTestError);
    });
});
