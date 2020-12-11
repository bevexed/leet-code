const rotate = function (nums, k) {
  const length = nums.length;
  k = k % length;
  for (let j = 0; j < k; j++) {
    for (let i = length - 1; i > 0; i--) {
      [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
    }
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)
rotate([-1, -100, 3, 99], 2)


const rotate2 = function (nums, k) {
  const length = nums.length;
  k = k % length;
  let count = 0;
  for (let start = 0; count < length; start++) {
    let cur = start
    let prev = nums[start]
    do {
      const next = (cur + k) % length;
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      cur = next
      count++;
    } while (start !== cur)
  }
};

rotate2([1, 2, 3, 4, 5, 6, 7], 3)
rotate2([-1, -100, 3, 99], 2)

const reverse = function(nums){
  const length = nums.length;
  const times = length / 2
  for (let i = 0; i < times; i++) {
    const temp = nums[length  - 1 - i]
    nums[length - 1 -i] = nums[i]
    nums[i] = temp
  }
}

reverse([1,2,3,4,5])


const rotate3 = function (nums, k) {
  const length = nums.length;
  k %= length;
  _reverse(nums, 0, length - 1);
  _reverse(nums, 0, k - 1);
  _reverse(nums, k, length - 1);
};

const _reverse = function(nums,start,end){
  while(start<end){
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
rotate3([1, 2, 3, 4, 5, 6, 7], 3)
rotate3([-1, -100, 3, 99], 2)
