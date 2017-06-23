/**
 * @class Action - Class for representing action.
 * @property {Object} type
 * @property {Object} payload
 */
class Action {
    /**
     * Create an action.
     * @param {Object} type - defines action's type.
     * @param {Object} payload - defines payload on which to do the actions.
     */
    constructor({ type, payload }) {
        this.type = type;
        this.payload = payload;
    }

    /**
     * Return action as a plain object.
     */
    asPlainObject() {
        return {
            type: this.type,
            payload: this.payload,
        };
    }

  // used to simulate another (simpler) constructor
    static create(type, payload) {
        return new Action({
            type, payload,
        });
    }
}

module.exports = Action;
