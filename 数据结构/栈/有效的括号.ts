const isValid = function (s: string): boolean {
  if (s.length < 0 || s.length % 2 === 1) {
    return false;
  }

  let stack: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const str = s.charAt(i);
    if (['(', '{', '['].includes(str)) {
      stack.push(str);
      continue;
    }
    switch (str) {
      case '}':
        if (stack.pop() !== '{') {
          return false;
        }
        break;
      case ')':
        if (stack.pop() !== '(') {
          return false;
        }
        break;
      case ']':
        if (stack.pop() !== '[') {
          return false;
        }
    }
  }

  return stack.length === 0;
};

console.log(isValid('{}'));
