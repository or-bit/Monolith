const IDGenerator = require('./IdGenerator');
const expect = require('chai').expect;

describe('IDGenerator test suite', () => {
    it('should create a random ObjectID', () => {
        const randomId = IDGenerator.createRandomId();
        expect(randomId.id).to.be.instanceof(Buffer);
    });

    it('should create a random id as a string', () => {
        const randomId = IDGenerator.createRandomIdAsString();
        expect(randomId).to.have.length(24);
    });

    it('should create 1000 unique ids', () => {
        const ids = [];
        for (let i = 0; i < 1000; i += 1) {
            ids.push(IDGenerator.createRandomIdAsString());
        }
        expect(new Set(ids).size).to.equal(1000);
    });
});
