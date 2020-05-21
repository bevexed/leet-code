"use strict";
const numSquares = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    // 平方数列表集合
    const powList = [];
    const targetList = [n, null];
    const set = new Set();
    const visited = new Set();
    const start = Math.floor(Math.sqrt(n));
    for (let i = 0; i < start; i++) {
        const val = Math.pow(i + 1, 2);
        powList.unshift(val);
        set.add(val);
    }
    let step = 1;
    while (targetList.length) {
        const cur = targetList.shift();
        if (set.has(cur)) {
            return step;
        }
        if (cur === null) {
            step++;
            targetList.push(null);
            continue;
        }
        for (let i = 0; i < powList.length; i++) {
            if (cur > powList[i] && !visited.has(cur - powList[i])) {
                targetList.push(cur - powList[i]);
                visited.add(cur - powList[i]);
            }
        }
    }
    return 0;
};
console.log(numSquares(1000));
