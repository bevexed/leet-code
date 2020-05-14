"use strict";
const deadends = ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'];
const init = '0000';
const dir = [1, -1];
const openLock = function (deadends, target) {
    const dead = new Set(deadends);
    const seen = new Set();
    const queue = [init, null]; // 这个 null 非常 nice
    let step = 0;
    if (dead.has(target) || dead.has(init))
        return -1;
    while (queue.length) {
        const cur = queue.shift();
        if (dead.has(cur)) {
            continue;
        }
        if (cur === null) {
            step++;
            if (queue[0] && queue[0] !== null) {
                //使用 null 来截断数据
                queue.push(null);
            }
            continue;
        }
        if (cur === target) {
            return step;
        }
        for (let i = 0; i < cur.length; i++) {
            for (let j = 0; j < dir.length; j++) {
                const _cur = cur.substring(0, i) + ((Number(cur.charAt(i)) + dir[j] + 10) % 10) + cur.substring(i + 1);
                if (!seen.has(_cur)) {
                    queue.push(_cur);
                    seen.add(_cur);
                }
            }
        }
    }
    return -1;
};
console.log(openLock(deadends, '8888'));
