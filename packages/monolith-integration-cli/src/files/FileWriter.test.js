const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const fs = require('fs');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const FileWriter = require('./FileWriter');

const expect = chai.use(chaiAsPromised).expect;
chai.use(sinonChai);

describe('FileWriter Test Suite', () => {
    describe('when requiring object', () => {
        it('should get an object and a function', () => {
            expect(FileWriter.writeFile).to.be.a('function');
            expect(FileWriter.fileProperties).to.be.an('object');
        });
    });

    describe('when writing to file', () => {
        const fsStub = sinon.stub(fs, 'writeFile');

        beforeEach(() => {
            fsStub.reset();
        });

        after(() => {
            fsStub.restore();
        });

        it('writeFile should resolve if write succeeds', () => {
            fsStub.yields(null);
            expect(
              FileWriter.writeFile('.', 'hi!', console.log)
            ).to.eventually.be.resolved;
        });

        it('writeFile should call fs with the right args', () => {
            FileWriter.writeFile('.', 'hi!', console.log);

            expect(fsStub).to.have.been.calledWith(
              '.',
              'hi!',
              FileWriter.fileProperties,
              sinon.match.any
            );
        });

        it('writeFile should reject if write fails', () => {
            fsStub.yields(new Error('Some error'));
            expect(
              FileWriter.writeFile('.', 'hi!', console.log)
            ).to.eventually.be.rejectedWith(Error);
        });
    });
});
