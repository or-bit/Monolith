class Action {
    constructor({ type, payload }) {
        this.type = type;
        this.payload = payload;
    }

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
