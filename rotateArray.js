function rotateArray(nums, k) {
  k %= nums.length;

  const lastKElems = nums.slice(nums.length - k);

  for (let i = nums.length - 1 - k; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < lastKElems.length; i++) {
    nums[i] = lastKElems[i];
  }
}

const tests = [
  { nums: [1, 2], k: 3 },
  { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 },
];

for (const { nums, k } of tests) {
  rotateArray(nums, k);
  console.log(nums);
}
