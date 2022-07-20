const rotate = function(nums, k) {
  k %= nums.length;
  
  const lastKElems = nums.slice(nums.length - k);
  
  for (let i = nums.length - 1 - k; i >= 0; i--) {
    nums[i + k] = nums[i];
  }
  
  for (let i = 0; i < lastKElems.length; i++) {
    nums[i] = lastKElems[i];
  }
};

const data = [
  [[1,2], 3],
  [[1,2,3,4,5,6,7], 3],
];

data.forEach(args => rotate(...args));

console.log(data.join("\n"));
