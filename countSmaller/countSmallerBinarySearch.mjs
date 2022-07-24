import { test } from "./common/tests.mjs";

function countSmallerBinarySearch(nums) {
  const sorted = [];
  const result = Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    let left = 0;
    let right = sorted.length;

    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);

      if (nums[i] > sorted[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    result[i] = left;
    sorted.splice(left, 0, nums[i]);
  }

  return result;
}

test(countSmallerBinarySearch);
