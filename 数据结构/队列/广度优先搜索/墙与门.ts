const EMPTY = Math.pow(2, 31) - 1;
const GATE = 0;
const WALL = -1;
const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const wallsAndGate = (rooms: Array<Array<number>>): void => {
  if (rooms.length === 0 || rooms[0].length === 0) {
    return;
  }

  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === EMPTY) {
        rooms[row][col] = distanceToNearestGate(rooms, row, col);
        console.log(rooms);
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
  const distance = new Array(m).fill(new Array(n).fill(0));
  const q: number[][] = [];
  q.push([startRow, startCol]);
  while (q.length !== 0) {
    let [row, col] = q.shift() as number[];
    for (let i = 0; i < DIRECTIONS.length; i++) {
      const r: number = row + DIRECTIONS[i][0];
      const c: number = col + DIRECTIONS[i][1];
      if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] === WALL) {
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

wallsAndGate([
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
]);
