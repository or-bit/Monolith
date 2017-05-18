class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            // only available in Node.JS
            // https://nodejs.org/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

module.exports = ExtendableError;
