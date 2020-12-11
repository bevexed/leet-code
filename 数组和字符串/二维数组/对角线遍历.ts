function findDiagonalOrder(matrix: number[][]): number[] {
  const nums = [];
  const { length: m } = matrix;
  const { length: n } = matrix[0] || { length: 0 };
  let i = 0;
  while (i < m + n) {
    // 第 1 3 5 ... 趟
    let x1 = i < m ? i : m - 1; // 确定 x y 的初始值
    let y1 = i - x1;
    while (x1 >= 0 && y1 < n) {
      nums.push(matrix[x1][y1]);
      x1--;
      y1++;
    }
    i++;

    if (i >= m + n) break;
    // 第 2 4 6 ... 趟
    let y2 = i < n ? i : n - 1; // 确定 x y 的初始值
    let x2 = i - y2;
    while (y2 >= 0 && x2 < m) {
      nums.push(matrix[x2][y2]);
      x2++;
      y2--;
    }
    i++;
  }
  return nums;
}

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
