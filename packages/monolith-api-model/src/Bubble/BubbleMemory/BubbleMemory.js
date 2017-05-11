const EventEmitter = require('events');
const createStore = require('redux').createStore;

/**
 * @class BubbleMemory - TODO
 */
class BubbleMemory extends EventEmitter {
  constructor(store) {
      super();
      // this.memory = createStore(reducers, state);
  }

  subscribe(onChangeStateFunction) {
      if (typeof onChangeStateFunction === 'function') {
          this.memory.subscribe(onChangeStateFunction);
      } else {
          throw new Error('Function parameter expected.')
      }
  }

  unsubscribe(onChangeStateFunction) {

  }

}

module.exports = BubbleMemory;
