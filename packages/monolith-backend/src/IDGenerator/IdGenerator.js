const ObjectID = require('mongodb').ObjectID;

const IDGenerator = (function idGenerator() {
    const createRandomId = () => new ObjectID();

    const createRandomIdAsString = () => createRandomId().toHexString();

    return {
        createRandomId,
        createRandomIdAsString,
    };
}());

module.exports = IDGenerator;
