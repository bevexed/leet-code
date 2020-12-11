function rotate(matrix: number[][]): void {
  const length = matrix.length;
  for (let i = 0; i < length; i++) {
    const _length = matrix[i].length;
    // 对角线交换
    for (let j = i; j < _length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
      console.log(matrix);
    }
  }
  matrix.forEach((row) => row.reverse());
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
