{
  const testArr = [1, [2, 3]];

  const copy = (arr: any) => {
    return arr.map((item: any) => {
      if (Array.isArray(item)) {
        copy(item);
      }
      return item;
    });
  };

  const deepCopy = (arr: typeof testArr) => {
    return copy(arr);
  };

  console.log(deepCopy(testArr));
}
