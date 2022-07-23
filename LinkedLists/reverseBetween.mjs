import { ListNode } from "./common/entries.mjs";
import { getLinkedListByArray, printLinkedList } from "./common/utils.mjs";

function reverseBetween(head, left, right) {
  if (left === right) return head;

  let prevHead = new ListNode(-1, head);
  let beforeLeft = prevHead;
  let beforePointer = null;
  
  for (let i = 0; i < left - 1; i++) {
    beforeLeft = beforeLeft.next;
  }

  beforePointer = beforeLeft.next;

  for (let i = 0; i < right - left; i++) {
    insert(beforeLeft, beforePointer);
  }

  return prevHead.next;
}

function insert(beforeDist, beforeSource) {
  const source = beforeSource.next;
  const dist = beforeDist.next;
  const afterSource = source.next;
  
  beforeSource.next = afterSource;
  beforeDist.next = source;
  source.next = dist;
}

const tests = [
  {
    params: {
      head: getLinkedListByArray([1, 2, 3, 4, 5]),
      left: 1,
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
