let arr = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const land = '1';
const water = '0';

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const numIslands = (grid: typeof arr): number => {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let lands = 0,
    queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === land) {
        lands += 1;
        queue.push([i, j]);
        while (queue.length) {
          const [r, c] = queue.shift() as Array<number>;
          for (let k = 0; k < directions.length; k++) {
            const row = r + directions[k][0];
            const col = c + directions[k][1];
            if (
              row < 0 ||
              col < 0 ||
              row >= grid.length ||
              col >= grid[0].length ||
              grid[row][col] === water ||
              (i === row && col == j)
            ) {
              continue;
            }
            // 将与该岛相连的所有岛变成水，使他成为孤岛
            if (grid[row][col] === land) {
              grid[row][col] = water;
            }
            queue.push([row, col]);
          }
        }
      }
    }
  }
  return lands;
};

console.log(numIslands(arr));
