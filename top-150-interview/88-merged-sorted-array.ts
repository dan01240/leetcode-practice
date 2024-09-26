/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number) {
  nums1.splice(m, num1.length - m, ...nums2);
  console.log(num1);
  return nums1.sort((a, b) => a - b);
}

const num1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const num2 = [2, 5, 6];
const n = 3;
console.log(merge(num1, m, num2, n));
