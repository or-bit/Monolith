/**
 * @class Class that defines the bubble's lifetime in seconds.
 * @property {Object} timer
 * @property {float} timeout
 */
class LifeCycle {
    /**
     * Create a life cycle.
     * @param {sec} - Time in seconds
     */
    constructor(sec = null) {
        this.tm = sec * 1000;
        this.timer = null;
    }

    /**
     * Start LyfeCycle's timer.
     */
    start() {
        return new Promise((resolve, reject) => {
            if (this.timer === null) {
                this.timer = setTimeout(resolve, this.timeout);
            } else {
                reject(Error('Timer already set'));
            }
        });
    }

    /**
     * Get timeout value.
     */
    get timeout() {
        return this.tm;
    }

    /**
     * Set timeout value.
     */
    set timeout(sec) {
        this.tm = sec;
    }

    /**
     * Reset the timer and clear the timeout.
     */
    clear() {
        clearTimeout(this.timer);
        this.timer = null;
    }
}

module.exports = LifeCycle;
