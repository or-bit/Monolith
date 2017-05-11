const createStore = require('redux').createStore;
const DataBase = require('../../Model/DataBase/DataBase');
const UninitializedStoreError = require('./UninitializedStoreError');

// Singleton pattern alike: ref http://2ality.com/2011/04/singleton-pattern-in-javascript-not.html
const StoreProvider = {

  defaultStoreCollection: 'store',

  initStore(reducers, initialState, db) {
    return new Promise((resolve, reject) => {
      this._initialState = initialState;
      // check for both null and undefined
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
      if (db != null) {
        if(this._initialState == null) {
          this.fetchStateFromDB(db).then(state => {
            this._initialState = state;
            this._store = createStore(reducers, this._initialState);
            this.persistStateToDB(db);
            resolve(this._store);
          }).catch(warning => console.log(warning));
        }
      } else {
        this._store = createStore(reducers, this._initialState);
        resolve(this._store);
      }
    });
  },

  persistStateToDB(db) {
    if (db != null) {
      this._store.subscribe(() => {
        console.log(JSON.stringify(this._store.getState()));
        db.updateOne(
          this.defaultStoreCollection,
          {},
          { $set: { state: this._store.getState() } },
          { returnOriginal: false, upsert: true }
        ).then(() => console.log('State persisted to DB'))
          .catch(error => {
            throw new Error(error);
          });
      });
    }
  },

  fetchStateFromDB(db) {
    return new Promise((resolve, reject) => {
      db.findOne(this.defaultStoreCollection, {})
        .then(state => {
          resolve(state);
        })
        .catch(() => {
          reject('State not found on DB');
        });
    });
  },

  getStore() {
    if (!this._store) {
      throw new UninitializedStoreError();
    }
    return this._store;
  },

  resetStore() {
    this._store = null
  }
};

module.exports = StoreProvider;