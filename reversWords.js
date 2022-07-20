function reverse(str) {
  let word = "";
  let res = "";

  for (let c of str) {
    if (c === " ") {
      res += word + c;
      word = "";
    } else {
      word = c + word;
    }
  }

  return res + word;
}

const str = "Let's take LeetCode contest";

console.log(reverse(str));