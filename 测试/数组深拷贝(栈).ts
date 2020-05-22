{
  const testArr = [1, [2, 3]];

  const deepCopy = (arr: Array<any>): Array<any> => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        stack[i] = deepCopy(arr[i]);
      } else {
        stack[i] = arr[i];
      }
    }
    return stack;
  };

  console.log(deepCopy(testArr));
}
