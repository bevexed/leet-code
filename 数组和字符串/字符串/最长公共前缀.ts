function longestCommonPrefix(strs: string[]): string {
  const length = strs.length;
  if (!length) {
    return '';
  }
  let res = '';
  let minStr = strs.sort((a, b) => a.length - b.length)[0];

  for (let i = 0; i < minStr.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (minStr[i] !== strs[j][i]) {
        return res;
      }
    }
    res += minStr[i];
  }
  return res;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
