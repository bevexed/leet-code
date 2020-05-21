const evalRPN = function (tokens: Array<string>): number {
  const set = new Set(['-', '+', '*', '/']);
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const cur = tokens[i];
    if (set.has(cur)) {
      const first = parseInt(stack.pop() as string);
      const second = parseInt(stack.pop() as string);
      const res = parseInt(eval(`(${second})` + cur + `(${first})`));
      stack.push(res);
      continue;
    }
    stack.push(cur);
  }
  return stack[0] as number;
};

console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']));
