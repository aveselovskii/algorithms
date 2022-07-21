import { getLinkedListByArray, printLinkedList } from "./common/utils.mjs";

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
}

const l1 = getLinkedListByArray([1, 2, 4]);
const l2 = getLinkedListByArray([1, 3, 4]);

printLinkedList(mergeTwoSortedLists(l1, l2));
