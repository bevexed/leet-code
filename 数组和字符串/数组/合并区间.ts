function merge(intervals: number[][]): number[][] {
  let start = Infinity;
  let end = -Infinity;
  const res = [];
  if (intervals.length === 1) {
    return intervals;
  }
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  for (let i = 0; i < intervals.length; i++) {
    const [first, second] = intervals[i];
    if (start === Infinity) {
      start = first;
      end = second;
    } else {
      if (end >= first) {
        // 合并区间
        end = second > end ? second : end;
      } else {
        res.push([start, end]);
        start = first;
        end = second;
      }
      if (intervals.length - 1 === i) {
        res.push([start, end]);
      }
    }
  }
  return res as [][];
}

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
