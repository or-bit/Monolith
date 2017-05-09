const BubbleMemory = require('./BubbleMemory');
const EventEmitter = require('events');
const assert = require('chai').assert;

describe('BubbleMemory test suite', () => {
    it('should be an EventEmitter object', () => {
        const bubbleMemory = new BubbleMemory();
        assert.instanceOf(bubbleMemory, EventEmitter);
    });
});