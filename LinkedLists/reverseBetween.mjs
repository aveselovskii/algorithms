import { getLinkedListByArray, printLinkedList } from "./common/utils.mjs";

function reverseBetween(head, left, right) {
  let start = head, cur = head;
  let i = 1;

  while (i < left) {
    start = cur;
    cur = cur.next;
    i++;
  }

  let prev = null, tail = cur;

  while (i <= right) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }

  start.next = prev;
  tail.next = cur;

  return left === 1 ? prev : head;
}

const tests = [
  {
    params: {
      head: getLinkedListByArray([1, 2, 3, 4, 5]),
      left: 2,
      right: 4,
    },
    answer: [1, 4, 3, 2, 5],
  },
  {
    params: {
      head: getLinkedListByArray([3, 5]),
      left: 1,
      right: 2,
    },
    answer: [5, 3],
  },
];

for (const test of tests) {
  const { params, answer } = test;
  printLinkedList(params.head);
  const head = reverseBetween(params.head, params.left, params.right);
  printLinkedList(head);
  console.log(answer);
}
