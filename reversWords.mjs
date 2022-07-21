function reversWords(str) {
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

const test = "Let's take LeetCode contest";

console.log(reversWords(test));
