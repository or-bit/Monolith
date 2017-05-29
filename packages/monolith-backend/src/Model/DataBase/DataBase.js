const MongoClient = require('mongodb');

/**
 * @class DataBase - Class that connects to the specified MongoDB Server instance.
 * @property {string} mongoUrl
 */
class DataBase {
    /**
     * Initialize the DataBase object with the specified url
     * @param mongoUrl {string}
     */
    constructor(mongoUrl) {
        this.mongourl = mongoUrl;
    }

    /**
     *
     * @returns {*}
     */
    connect() {
        return MongoClient.connect(this.mongourl);
    }

    /**
     * Method that tries to read from the specified collection of the connected DataBase
     * @param collectionName {string} Name of the collection to search in.
     * @param filter {Object} Query selection criteria {@link https://docs.mongodb.com/manual/reference/operator/query/}.
     * @returns {Promise} A promise which will be resolved if the connection has been successful and
     *  if something has been found inside the specified collection, rejected otherwise.
     */
    findOne(collectionName, filter) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).findOne(filter)
                    .then(
                        (doc) => {
                            db.close();
                            resolve(doc);
                        })
                    .catch(error => reject(error));
            }).catch(error => reject(error));
        });
    }

    /**
     * Method that tries to insert an element inside the specified collection of the connected DataBase.
     * @param collectionName {string} Name of the collection to put the element in.
     * @param element {Object} Element to be inserted.
     * @returns {Promise} A promise which will be resolved if the connection and the insertion have been successful,
     *  rejected otherwise.
     */
    insertOne(collectionName, element) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).insertOne(element)
                    .then(
                        (data) => {
                            db.close();
                            resolve(data);
                        })
                  .catch(error => reject(error));
            }).catch(error => reject(error));
        });
    }

    updateOne(collectionName, element, newElement, upsert) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).findOneAndUpdate(
                    element,
                    newElement,
                    {
                        returnOriginal: false,
                        upsert,
                        returnNewDocument: true,
                    }
                ).then(() => {
                    db.close();
                    resolve();
                }).catch(error => reject(error));
            }).catch(error => reject(error));
        });
    }
}

module.exports = DataBase;
