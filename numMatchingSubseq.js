import { strict as assert } from "node:assert";

const numMatchingSubseq = function (s, words) {
  let result = 0;
  const map = new Map();
  
  for (const w of words) {
    map.set(w, (map.get(w) || 0) + 1);
  }
  
  for (const [w, count] of map) {
    if (isSubseq(s, w)) result += count;
  }

  return result;
};

const isSubseq = function (s, w) {
  let i = -1;

  for (const c of w) {
    const indexOf = s.indexOf(c, i + 1);
    if (indexOf === -1) return false;
    i = indexOf;
  }

  return true;
}

const tests = [
  { s: "abcde", words: ["a", "bb", "acd", "ace"], answer: 3 },
  {
    s: "dsahjpjauf",
    words: ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax", "ja"],
    answer: 3,
  },
];

for (let { s, words, answer } of tests) {
  const result = numMatchingSubseq(s, words);
  assert.equal(
    result,
    answer,
    `s=${s}\nwords=${words}\nresult=${result}\nanswer=${answer}`
  );
}
