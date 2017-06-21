const expect = require('chai').expect;
const StoreProvider = require('./StoreProvider');
const sinon = require('sinon');
const UninitializedStoreError = require('./UninitializedStoreError');
const DataBase = require('../DataBase/DataBase');

const name = 'myName';
const changedName = 'yourName';

const testReducer = (state = { name }, action) => {
    if (action.type === 'change name') {
        return Object.assign({}, state, { name: changedName });
    }
    return state;
};

describe('Redux Store Test Suite', () => {
    describe('failing attempt to use the Store', () => {
        it('should throw UninitializedStoreError', () => {
            expect(StoreProvider.getStore).to.throw(UninitializedStoreError);
        });
    });

    describe('testing volatile StoreProvider', () => {
        before(() => StoreProvider.initStore(testReducer));

        after(() => StoreProvider.resetStore());

        it('should contain the initial state', () => {
            const state = StoreProvider.getStore().getState();
            expect(state).to.deep.equal({ name });
        });

        it('should contain the initial state of the reducer', () => {
            StoreProvider.getStore().dispatch({
                type: 'change name',
            });
            const state = StoreProvider.getStore().getState();
            expect(state).to.deep.equal({ name: changedName });
        });
    });

    describe('testing persisted StoreProvider', () => {
        let stubbedDB;
        let consoleSpy;

        beforeEach(() => {
            const db = new DataBase('mongodb://localhost:7777');
            stubbedDB = {
                findOne: sinon.stub(db, 'findOne'),
                updateOne: sinon.stub(db, 'updateOne').resolves(),
            };
            consoleSpy = sinon.spy(console, 'log');
        });

        afterEach(() => {
            stubbedDB.findOne.restore();
            stubbedDB.updateOne.restore();
            StoreProvider.resetStore();
            consoleSpy.restore();
        });

        it('should load a persisted state', () => {
            const expectedState = { name: 'initialState ' };
            stubbedDB.findOne.withArgs('store', {}).resolves(expectedState);
            return StoreProvider.initStore(testReducer, undefined, stubbedDB)
              .then(store => expect(store.getState()).to.eql(expectedState));
        });

        /* eslint-disable max-len */
        it('should not load a persisted state since we give it an initial state', () => {
            const expectedState = { name: 'initialState ' };
            stubbedDB.findOne.withArgs('store', {}).resolves(expectedState);
            return StoreProvider.initStore(testReducer, {}, stubbedDB)
              .then(store => expect(store.getState()).to.eql({}));
        });

        it('should persist the state change', () => {
            stubbedDB.findOne.withArgs('store', {}).resolves();
            StoreProvider.initStore(testReducer, undefined, stubbedDB)
              .then(() => {
                  StoreProvider.getStore().dispatch({
                      type: 'change name',
                  });
                  sinon.assert.calledOnce(consoleSpy);
              });
        });
    });

    describe('testing failing persisted StoreProvider', () => {
        let stubbedDB;
        let db;

        const error = 'unknown error';
        const spy = sinon.spy(console, 'warn');

        beforeEach(() => {
            StoreProvider.resetStore();
            db = new DataBase('mongodb://localhost:7777');
        });

        afterEach(() => {
            stubbedDB.findOne.restore();
            stubbedDB.updateOne.restore();
        });

        /* eslint-disable max-len */
        it('should fail to load persisted store hence start with the reducer initial state', () => {
            stubbedDB = {
                findOne: sinon.stub(db, 'findOne').rejects(),
                updateOne: sinon.stub(db, 'updateOne').rejects(error),
            };
            return StoreProvider.initStore(testReducer, undefined, stubbedDB)
               .then(store => expect(store.getState()).to.eql({ name }));
        });

        it('should fail to persist state change', () => {
            stubbedDB = {
                findOne: sinon.stub(db, 'findOne').resolves(),
                updateOne: sinon.stub(db, 'updateOne').rejects(error),
            };
            StoreProvider.initStore(testReducer, undefined, stubbedDB).then(() => {
                StoreProvider.getStore().dispatch({
                    type: 'change name',
                });
            });
            sinon.assert.calledOnce(spy);
            spy.restore();
        });
    });
});
