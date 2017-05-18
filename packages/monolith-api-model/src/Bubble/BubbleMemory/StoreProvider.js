const createStore = require('redux').createStore;
const UninitializedStoreError = require('./UninitializedStoreError');

// Singleton pattern alike: ref http://2ality.com/2011/04/singleton-pattern-in-javascript-not.html
const StoreProvider = {

    defaultStoreCollection: 'store',

    initStore(reducers, initialState, db) {
        return new Promise((resolve) => {
            this.initialState = initialState;
            // check for both null and undefined
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
            if (db != null) {
                if (this.initialState == null) {
                    this.fetchStateFromDB(db).then((state) => {
                        this.initialState = state;
                        this.store = createStore(reducers, this.initialState);
                        this.persistStateToDB(db);
                        resolve(this.store);
                    }).catch(warning => console.log(warning));
                }
            } else {
                this.store = createStore(reducers, this.initialState);
                resolve(this.store);
            }
        });
    },

    persistStateToDB(db) {
        if (db != null) {
            this.store.subscribe(() => {
                console.log(JSON.stringify(this.store.getState()));
                db.updateOne(
                  this.defaultStoreCollection,
                  {},
                  { $set: { state: this.store.getState() } },
                  { returnOriginal: false, upsert: true }
                ).then(() => console.log('State persisted to DB'))
                  .catch((error) => {
                      throw new Error(error);
                  });
            });
        }
    },

    fetchStateFromDB(db) {
        return new Promise((resolve, reject) => {
            db.findOne(this.defaultStoreCollection, {})
              .then((state) => {
                  resolve(state);
              })
              .catch(() => {
                  reject('State not found on DB');
              });
        });
    },

    getStore() {
        if (!this.store) {
            throw new UninitializedStoreError();
        }
        return this.store;
    },

    resetStore() {
        this.store = null;
    },
};

module.exports = StoreProvider;
