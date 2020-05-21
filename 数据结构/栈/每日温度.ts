const dailyTemperatures = (T: Array<number>): Array<number> => {
  if (T.length === 1) {
    return [0];
  }

  const stack: Array<number> = [];
  const res = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    // 查看当前元素是否大于栈顶元素所对应的 T 的值
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop() as number;
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
