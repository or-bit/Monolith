const EventEmitter = require('events');

/**
 * @class BubbleMemory - TODO
 */
class BubbleMemory extends EventEmitter {
    constructor(store) {
        super();
        console.log(store);
        // this.memory = createStore(reducers, state);
    }

    subscribe(onChangeStateFunction) {
        if (typeof onChangeStateFunction === 'function') {
            this.memory.subscribe(onChangeStateFunction);
        } else {
            throw new Error('Function parameter expected.');
        }
    }

    unsubscribe(onChangeStateFunction) {
        // FAKE LINES ADDED FOR ESLINT UNTIL CLASS IS DONE
        console.log(this);
        onChangeStateFunction();
    }

}

module.exports = BubbleMemory;
