"use strict";
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
const wallsAndGates = (rooms) => {
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
const distanceToNearestGate = (rooms, startRow, startCol) => {
    const m = rooms.length;
    const n = rooms[0].length;
    const q = [];
    // 创建一个 二维数组 用来存放到 传入节点的距离 为 0
    const distance = new Array(m).fill([]).map((item) => {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = 0;
        }
        return arr;
    });
    q.push([startRow, startCol]);
    while (q.length !== 0) {
        let [row, col] = q.shift();
        for (let i = 0; i < DIRECTIONS.length; i++) {
            const r = row + DIRECTIONS[i][0];
            const c = col + DIRECTIONS[i][1];
            if (r < 0 || // 判断边界
                c < 0 || // 判断边界
                r >= m || // 判断边界
                c >= n || // 判断边界
                rooms[r][c] === WALL || // 判断改节点手否是墙
                distance[r][c] !== 0 || // 判断改节点是否被遍历过
                (r === startRow && c === startCol) // 判断是否是初始节点
            ) {
                continue;
            }
            distance[r][c] = distance[row][col] + 1; // 当前距离 等于 上一次遍历的结果 + 1
            if (rooms[r][c] === GATE) {
                // 如果遇到门返回当前距离
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
