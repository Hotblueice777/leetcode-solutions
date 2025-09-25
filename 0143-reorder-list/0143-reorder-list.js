/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
        if (!head || !head.next) return;

    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow.next;
    slow.next = null; 
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    let l2 = prev;  
    let l1 = head;

    while (l2) {
        let n1 = l1.next;
        let n2 = l2.next;

        l1.next = l2;
        l2.next = n1;

        l1 = n1;
        l2 = n2;
    }
};