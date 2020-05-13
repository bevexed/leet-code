"use strict";
class MyCircularQueue {
    // MyCircularQueue(k): 构造器，设置队列长度为 k 。
    constructor(k) {
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
    enQueue(value) {
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
