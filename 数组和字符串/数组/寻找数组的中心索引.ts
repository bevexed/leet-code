function pivotIndex(nums: number[]): number {
  if (nums.length === 0) {
    return -1;
  }
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0,
      rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }
    for (let j = i + 1; j < nums.length; j++) {
      rightSum += nums[j];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
