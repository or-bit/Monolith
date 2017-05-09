class LifeCycle {
    constructor(sec = null) {
        this.tm = sec * 1000;
        this.timer = null;
    }

    start() {
        return new Promise((resolve, reject) => {
            if (this.timer === null) {
                this.timer = setTimeout(resolve, this.timeout);
            } else {
                reject(Error('Timer already set'));
            }
        });
    }

    get timeout() {
        return this.tm;
    }

    set timeout(sec) {
        this.tm = sec;
    }

    clear() {
        clearTimeout(this.timer);
        this.timer = null;
    }
}

module.exports = LifeCycle;