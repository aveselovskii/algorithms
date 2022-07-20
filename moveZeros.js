/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let l = 0;
  for ([i, num] of nums.entries()) {
    if (num !== 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l += 1;
    }
  }
};

const data = [
  [0,1,0,3,12,0],
  [2,0,0,16,0,33],
  [0],
  [1,3,12],
];

data.forEach(arr => moveZeroes(arr));

console.log(data.join("\n"));
