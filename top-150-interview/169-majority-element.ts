// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}

// 使用例
const nums = [2, 2, 1, 1, 1, 1, 2];
console.log(majorityElement(nums)); // 出力: 1
