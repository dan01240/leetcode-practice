// Simple Answer
// function merge(nums1: number[], m: number, nums2: number[], n: number) {
//   nums1.splice(m, num1.length - m, ...nums2);
//   console.log(num1);
//   return nums1.sort((a, b) => a - b);
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  while (p2 >= 0) {
    num1[p] = num2[p2];
    p2--;
    p--;
  }
}

const num1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const num2 = [2, 5, 6];
const n = 3;
merge(num1, m, num2, n);
