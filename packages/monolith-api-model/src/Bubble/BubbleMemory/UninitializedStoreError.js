const ExtendableError = require('../../Error/ExtendableError');

// Already tested since it's an instance of ExtendableError

module.exports = class UninitializedStoreError extends ExtendableError {};