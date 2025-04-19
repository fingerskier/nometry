export default class MovingAverage {
    constructor(value = 0, smoothness = 10) {
        this.value = value;
        this.smoothness = Math.max(1, smoothness);
        this.values = [];
    }

    update(new_value) {
        this.values.push(new_value);

        if (this.values.length > this.smoothness) {
            this.values.shift();
        }

        this.value = this.mean();

        return this.value;
    }

    mean() {
        return this.values.reduce((a, b) => a + b, 0) / this.values.length;
    }

    variance() {
        const mean = this.mean();
        return this.values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / this.values.length;
    }

    standardDeviation() {
        return Math.sqrt(this.variance());
    }

    forecast() {
        return this.mean();
    }

    valueOf() {
        return this.value;
    }
}
