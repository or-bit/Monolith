/**
 * @class Class used to represent an action.
 * @property type {string}
 * @property payload {Object}
 */
class Action {
    /**
     * Create an action.
     * @param type {string} Defines action's type.
     * @param payload {Object} Data on which the action gets executed.
     */
    constructor({ type, payload }) {
        this.type = type;
        this.payload = payload;
    }

    /**
     * Return an action as a plain object.
     */
    asPlainObject() {
        return {
            type: this.type,
            payload: this.payload,
        };
    }

    /**
     * Simulate another simpler constructor
     * @param type {string} Action type
     * @param payload {Object} Data on which the action gets executed.
     * @returns {Action}
     */
    static create(type, payload) {
        return new Action({
            type, payload,
        });
    }
}

module.exports = Action;
