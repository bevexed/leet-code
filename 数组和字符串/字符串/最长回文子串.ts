/**
 * @desc
 * 1. 游标法
 * @param s
 */

function longestPalindrome(s: string): string {
  const length = s.length;
  if (length < 2) {
    return s;
  }
  const strArr = [];
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      const temp = [...s.slice(i, j)];
      while (temp.length) {
        const header = temp.shift();
        const tail = temp.pop();
        if (header !== tail || !tail) {
          break;
        }
        if (temp.length <= 1) {
          strArr.push(s.slice(i, j));
        }
      }
    }
  }
  return strArr.sort((a, b) => a.length - b.length).reverse()[0] || s[0];
}

console.log(longestPalindrome('ac'));
