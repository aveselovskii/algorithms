function sortedSquares(nums) {
  const results = [];
  const ns = [];

  for (num of nums) {
    const square = num ** 2;
    if (num < 0) {
      ns.push(square);
    } else {
      while (square > ns[ns.length - 1]) {
        results.push(ns.pop());
      }
      results.push(square);
    }
  }

  while (ns.length) {
    results.push(ns.pop());
  }

  return results;
}

const tests = [
  [-4, -1, 0, 3, 10],
  [-7, -3, 2, 3, 11],
];

for (const nums of tests) {
  console.log(sortedSquares(nums));
}
