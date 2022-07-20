function moveZeroes(nums) {
  let l = 0;
  for ([i, num] of nums.entries()) {
    if (num !== 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l += 1;
    }
  }
};

const tests = [
  [0,1,0,3,12,0],
  [2,0,0,16,0,33],
  [0],
  [1,3,12],
];

for (const test of tests) {
  moveZeroes(test);
  console.log(test);
}
