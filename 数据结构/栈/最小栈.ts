interface MinStackProps {
  stack: Array<number>;
  push(x: number): null; // 将元素 x 推入栈中。
  pop(): null; // 删除栈顶的元素。
  top(): null | number; // 获取栈顶元素。
  getMin(): number; // 检索栈中的最小元素。
}

class MinStack implements MinStackProps {
  stack: Array<number>;
  constructor() {
    this.stack = [];
  }

  push(x: number): null {
    this.stack.push(x);
    return null;
  }

  pop(): null {
    this.stack.pop();
    return null;
  }

  top(): number | null {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return Math.min(...this.stack);
  }
}
