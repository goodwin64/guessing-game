class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        const { min, max } = this;
        return average(min, max);
    }

    lower() {
        const { min, max } = this;
        this.max = average(min, max);
    }

    greater() {
        const { min, max } = this;
        this.min = average(min, max);
    }
}

function average(min, max) {
    return Math.round((min + max) / 2);
}

module.exports = GuessingGame;
