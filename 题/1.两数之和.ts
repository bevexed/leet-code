const twoSum = (nums: Array<number>, target: number): Array<number> => {
  const map = new Map();
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const key = target - nums[i];
    if (map.has(key)) {
      return [map.get(key), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

const source: Array<number> = [2, 7, 11, 12];

console.log(twoSum(source, 9));
