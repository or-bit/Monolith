const createStore = require('redux').createStore;
const UninitializedStoreError = require('./UninitializedStoreError');

/**
 * This module creates store provider.
 * It implements a singleton pattern like {@link http://2ality.com/2011/04/singleton-pattern-in-javascript-not.html}
 * @module StoreProvider
 */
const StoreProvider = {

    defaultStoreCollection: 'store',

    /**
     * Initializes the store with the given params.
     * @function initStore
     * @param reducers
     * @param initialState
     * @param db
     * @returns {Promise}
     */
    initStore(reducers, initialState, db) {
        return new Promise((resolve) => {
            const create =
              () => createStore(reducers, this.initialState);

            this.initialState = initialState;
            // check for both null and undefined
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
            if (db != null) {
                if (this.initialState == null) {
                    this.fetchStateFromDB(db).then((state) => {
                        if (state != null) {
                            this.initialState = state;
                        } else {
                            // state never persisted on db
                            this.initialState = {};
                        }
                        this.store = create();
                        this.persistStateToDB(db);
                        resolve(this.store);
                    }).catch((warning) => {
                        console.warn(warning);
                        this.store = create();
                        resolve(this.store);
                    });
                } else {
                    this.store = create();
                    this.persistStateToDB(db);
                    resolve(this.store);
                }
            } else {
                this.store = createStore(reducers, this.initialState);
                resolve(this.store);
            }
        });
    },

    /**
     * Update the database.
     * @function persistStateToDB
     * @param db
     */
    // TODO move to "private" namespace
    persistStateToDB(db) {
        this.store.subscribe(() => {
            //  console.log(JSON.stringify(this.store.getState()));
            db.updateOne(
              this.defaultStoreCollection,
              {},
              { $set: this.store.getState() },
              true
            ).then(() => console.log('State persisted to DB'))
              .catch(error => console.warn('Could not persist state.\n', error)
              );
        });
    },

    /**
     * Recover state from the database.
     * @function fetchStateFromDB
     * @param db
     * @returns {Promise}
     */
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

    /**
     * Get the store
     * @function getStore
     * @returns {store}
     */
    getStore() {
        if (!this.store) {
            throw new UninitializedStoreError();
        }
        return this.store;
    },

    /**
     * Reset the store.
     * @function resetStore
     */
    resetStore() {
        this.store = null;
    },
};

module.exports = StoreProvider;
