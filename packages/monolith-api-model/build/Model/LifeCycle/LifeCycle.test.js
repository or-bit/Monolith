const chaiAsPromised = require('chai-as-promised');
const chai = require('chai');
const LifeCycle = require('./LifeCycle');

const expect = chai.use(chaiAsPromised).expect;

describe('LifeCycle', () => {
    it('should create an object with a field timeout in milliseconds', () => {
        const lc = new LifeCycle(10);
        let bool = true;
        expect(lc.timeout).to.equal(10000);
        lc.start().then(() => {
            bool = false;
        }).then(() => {
            expect(bool).to.equal(false);
        });
    });
    it('should not create another timer in the same object', () => {
        const lc = new LifeCycle(10);
        let s = '';
        lc.start().then(() => {
            s = 'Started';
        }, () => {
            s = 'Rejected';
        }).then(() => {
            s += '+Started';
        }, () => {
            s += '+Rejected';
        }).then(() => {
            expect(s).to.equal('Started+Rejected');
        });
    });
    it('should create a timer, clear it and create a second one', () => {
        const lc = new LifeCycle(10);
        let s = '';
        lc.start().then(() => {
            s = 'Started';
        }, () => {
            s = 'Rejected';
        }).then(() => {
            lc.clear();
        }).then(() => {
            s += '+Started';
        }, () => {
            s += '+Rejected';
        }).then(() => {
            expect(s).to.equal('Started+Started');
        });
    });
    it('should raise an Error when setting timer manually', () => {
        const lc = new LifeCycle(10);
        lc.timer = 11;
        return expect(lc.start()).to.be.rejected;
    });
    it('should set the correct timeout', () => {
        const lc = new LifeCycle();
        const expectedTimeout = 10;
        lc.timeout = expectedTimeout;
        expect(lc.timeout).to.equal(expectedTimeout);
    });
    it('should run the timerId twice', done => {
        const lc = new LifeCycle(0.5);
        lc.start().then(() => {
            console.log('resolved 1st');
            lc.clear();
            return lc.start().then(() => {
                console.log('resolved 2nd');
            });
        }).then(done, done);
    });
});