function searchInsert(nums: number[], target: number): number {
  let length = nums.length;
  if (length === 0) {
    return 0;
  }

  for (let i = 0; i < length; i++) {
    let num = nums[i];
    if (target <= num) {
      return i;
    }
  }

  return length;
}

console.log(searchInsert([1, 3, 5, 6], 5));
