{
  let arr = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '1'],
  ];

  const land = '1';
  const water = '0';

  const numIslands = (grid: typeof arr): number => {
    if (grid.length === 0 || grid[0].length === 0) {
      return 0;
    }
    let landNum = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === land) {
          landNum++;
          dfs(grid, i, j);
        }
      }
    }
    return landNum;
  };

  const dfs = (grid: typeof arr, r: number, c: number): void => {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === water) {
      return;
    }
    grid[r][c] = water;
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
  };

  console.log(numIslands(arr));
}
