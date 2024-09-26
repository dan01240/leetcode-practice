// Simple Answer
// function merge(nums1: number[], m: number, nums2: number[], n: number) {
//   nums1.splice(m, num1.length - m, ...nums2);
//   console.log(num1);
//   return nums1.sort((a, b) => a - b);
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // nums1とnums2の最後の要素を指すポインタ
  let p1 = m - 1;
  let p2 = n - 1;
  // nums1の末尾から要素を埋めていくポインタ
  let p = m + n - 1;

  // nums1とnums2の要素を比較し、nums1の末尾から埋めていく
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

  // nums2に要素が残っている場合、それをnums1の先頭にコピー
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}

const num1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const num2 = [2, 5, 6];
const n = 3;
merge(num1, m, num2, n);
