{
  const findTargetSumWays = function (nums: Array<number>, S: number): number {
    let count = 0;
    calculate(nums, 0, 0, S);
    function calculate(nums: Array<number>, i: number, sum: number, S: number) {
      if (i == nums.length) {
        if (sum == S) count++;
      } else {
        calculate(nums, i + 1, sum + nums[i], S);
        calculate(nums, i + 1, sum - nums[i], S);
      }
    }
    return count;
  };

  const nums = [1, 1, 1, 1, 1];
  console.log(findTargetSumWays(nums, 3));
}
