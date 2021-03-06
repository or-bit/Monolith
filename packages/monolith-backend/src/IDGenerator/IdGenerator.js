/**
 * This module creates unique ids based on the current machine and current timestamp.
 * It uses ObjectID from MongoDB in order to make the generated ids easy to use when storing objects in a mongodb instance.
 * @module IDGenerator
 * @type[{createRandomId}, {createRandomIdAsString}]
 * @see https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html
 */
const ObjectID = require('mongodb').ObjectID;

const IDGenerator = (function idGenerator() {
    const createRandomId = () => new ObjectID();

    const createRandomIdAsString = () => createRandomId().toHexString();

    return {
        /**
         * Returns a new ObjectID instance. Can be used directly for object/document persistence (mongodb).
         * @return {ObjectID} Random unique id
         */
        createRandomId,

        /**
         * Returns a string based on a new ObjectID instance. It's always 24 characters long.
         * @return {string} Random unique id
         */
        createRandomIdAsString,
    };
}());

module.exports = IDGenerator;
