interface MyCircularQueueProps {
  // 数组
  arr: Array<number>;
  // 指针头 队列的起始位置
  head: number;
  // 指针尾 队列的结束位置
  tail: number;
  // 数组的长度
  length: number;
  // Front: 从队首获取元素。如果队列为空，返回 -1 。
  Front(): number;
  // Rear: 获取队尾元素。如果队列为空，返回 -1 。
  Rear(): number;
  // enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
  enQueue(value: number): boolean;
  // deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
  deQueue(): boolean;
  // isEmpty(): 检查循环队列是否为空。
  isEmpty(): boolean;
  // isFull(): 检查循环队列是否已满。
  isFull(): boolean;
}

class MyCircularQueue implements MyCircularQueueProps {
  arr: Array<number>;
  head: number;
  tail: number;
  length: number;

  // MyCircularQueue(k): 构造器，设置队列长度为 k 。
  constructor(k: number) {
    this.arr = new Array(k);
    this.head = -1;
    this.tail = -1;
    this.length = k;
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.arr[this.head];
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.arr[this.tail];
  }

  enQueue(value: number) {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    // 添加元素时移动 尾指针
    this.tail = (this.tail + 1) % this.length;
    this.arr[this.tail] = value;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    // 当数组中只有一个元素
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
      return true;
    }
    // 删除元素时移动 头指针
    this.head = (this.head + 1) % this.length;
    return true;
  }

  isEmpty() {
    return this.head === -1;
  }

  isFull() {
    return (this.tail + 1) % this.length === this.head;
  }
}
