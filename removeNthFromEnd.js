function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeNthFromEnd(head, n) {
  let slow = (fast = head);
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
}

const tests = [
  {
    head: new ListNode(1, new ListNode(2, new ListNode(4))),
    n: 2,
  },
];

for (const { head, n } of tests) {
  console.log(removeNthFromEnd(head, n));
}
