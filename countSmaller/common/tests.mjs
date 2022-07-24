import { strict as assert } from "node:assert";

const tests = [
  {
    props: {
      nums: [5, 2, 6, 1],
    },
    answer: [2, 1, 1, 0],
  },
  {
    props: {
      nums: [-1],
    },
    answer: [0],
  },
  {
    props: {
      nums: [-1, -1],
    },
    answer: [0, 0],
  },
];

export function test(func) {
  for (const { props, answer } of tests) {
    const result = func(props.nums);
    assert.deepEqual(result, answer, `\n${props}\n${result}\n${answer}`);
  }
}
