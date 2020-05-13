const EMPTY = Math.pow(2, 31) - 1; // 空格
const GATE = 0; // 门
const WALL = -1; // 墙
const DIRECTIONS = [
  // 要遍历的方向
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const wallsAndGates = (rooms: Array<Array<number>>): void => {
  // 没有房间直接返回
  if (rooms.length === 0 || rooms[0].length === 0) {
    return;
  }

  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === EMPTY) {
        rooms[row][col] = distanceToNearestGate(rooms, row, col);
      }
    }
  }
};

const distanceToNearestGate = (
  rooms: Array<Array<number>>,
  startRow: number,
  startCol: number
): number => {
  const m = rooms.length;
  const n = rooms[0].length;
  const q: number[][] = [];
  const distance: Array<Array<number>> = new Array(m).fill([]).map((item) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr[i] = 0;
    }
    return arr;
  });
  q.push([startRow, startCol]);
  while (q.length !== 0) {
    let [row, col] = q.shift() as number[];
    for (let i = 0; i < DIRECTIONS.length; i++) {
      const r: number = row + DIRECTIONS[i][0];
      const c: number = col + DIRECTIONS[i][1];
      if (
        r < 0 ||
        c < 0 ||
        r >= m ||
        c >= n ||
        rooms[r][c] === WALL ||
        distance[r][c] !== 0 ||
        (r === startRow && c === startCol)
      ) {
        continue;
      }
      distance[r][c] = distance[row][col] + 1;
      if (rooms[r][c] === GATE) {
        return distance[r][c];
      }
      q.push([r, c]);
    }
  }
  return EMPTY;
};

wallsAndGates([
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
]);
