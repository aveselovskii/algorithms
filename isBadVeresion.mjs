const N = 10000;
const BAD = 787;

function isBadVersion(n) {
  return n >= BAD;
}

function solution(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const pivot = Math.floor(left + ((right - left) / 2));
    if (isBadVersion(pivot)) {
        right = pivot;
    } else {
        left = pivot + 1;
    }
  }

  return left;
};  

console.log(solution(N));
