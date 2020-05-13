interface MovingAverageProps {
  data: Array<number>;
  size: number;
  head: number;
  count: number;
  sum: number;
  next(value: number): number;
}

class MovingAverage implements MovingAverageProps {
  data: Array<number>;
  size: number;
  head: number;
  count: number;
  sum: number;

  constructor(size: number) {
    this.data = new Array<number>(size).fill(0);
    this.size = size;
    this.head = 0;
    this.count = 0;
    this.sum = 0;
  }

  next(value: number): number {
    ++this.count;
    this.head = (this.head + 1) % this.size;
    this.sum = this.sum + value - this.data[this.head];
    this.data[this.head] = value;
    return this.sum / Math.min(this.count, this.size);
  }
}
