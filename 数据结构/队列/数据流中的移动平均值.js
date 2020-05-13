"use strict";
class MovingAverage {
    constructor(size) {
        this.data = new Array(size).fill(0);
        this.size = size;
        this.head = 0;
        this.count = 0;
        this.sum = 0;
    }
    next(value) {
        ++this.count;
        this.head = (this.head + 1) % this.size;
        this.sum = this.sum + value - this.data[this.head];
        this.data[this.head] = value;
        return this.sum / Math.min(this.count, this.size);
    }
}
