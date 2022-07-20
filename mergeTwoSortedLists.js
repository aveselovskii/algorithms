function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function mergeTwoSortedLists(l1, l2) {
  const head = { val: -1, next: null };
  let l = head;
  
  while (l1 && l2) {
    if (l1.val < l2.val) {
      l.next = l1;
      l1 = l1.next;
    } else {
      l.next = l2;
      l2 = l2.next;
    }
    l = l.next;
  }

  l.next = l1 || l2;
         
  return head.next;
};

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoSortedLists(l1, l2));
