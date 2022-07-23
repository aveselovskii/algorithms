import { ListNode } from "./entries.mjs";

function getLinkedListByArray(array) {
  let head = null;
  let current = null;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      head = new ListNode(array[i]);
      current = head;
    } else {
      current.next = new ListNode(array[i]);
      current = current.next;
    }
  }
  return head;
}

function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

export {
  getLinkedListByArray,
  printLinkedList,
};
