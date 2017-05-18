const expect = require('chai').expect;
const StoreProvider = require('./StoreProvider');
const sinon = require('sinon');
const UninitializedStoreError = require('./UninitializedStoreError');
const DataBase = require('../../Model/DataBase/DataBase');

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

        before(() => {
            const db = new DataBase('mongodb://localhost:7777');
            stubbedDB = {
                findOne: sinon.stub(db, 'findOne'),
                updateOne: sinon.stub(db, 'updateOne').resolves(),
            };
        });

        after(() => {
            stubbedDB.findOne.restore();
            stubbedDB.updateOne.restore();
        });

        it('should load a persisted state', () => {
            const expectedState = { name: 'initialState ' };
            stubbedDB.findOne.withArgs('store', {}).resolves(expectedState);
            return StoreProvider.initStore(testReducer, undefined, stubbedDB)
              .then(store => expect(store.getState()).to.eql(expectedState));
        });

        it('should persist the state change', () => {
            StoreProvider.getStore().dispatch({
                type: 'change name',
            });
            sinon.assert.called(stubbedDB.updateOne);
        });
    });
});
