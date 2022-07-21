import { getLinkedListByArray, printLinkedList } from "./common/utils.mjs";

function removeNthFromEnd(head, n) {
  let slow = head;
  let fast = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
}

const tests = [
  {
    head: getLinkedListByArray([1, 2, 4]),
    n: 2,
  },
];

for (const { head, n } of tests) {
  printLinkedList(removeNthFromEnd(head, n));
}
