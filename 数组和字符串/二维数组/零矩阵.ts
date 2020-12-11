function setZeroes(matrix: number[][]): void {
  const zero = [];
  const length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zero.push([i, j]);
      }
    }
  }
  for (let i = 0; i < zero.length; i++) {
    const [x, y] = zero[i];
    for (let j = 0; j < length; j++) {
      matrix[j][y] = 0;
    }
    for (let k = 0; k < matrix[0].length; k++) {
      matrix[x][k] = 0;
    }
  }
}

setZeroes([[0, 1]]);
