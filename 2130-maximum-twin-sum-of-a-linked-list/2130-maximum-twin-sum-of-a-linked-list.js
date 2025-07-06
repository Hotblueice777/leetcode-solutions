/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
        let values = [];
    let node = head;

    while (node) {
        values.push(node.val);
        node = node.next;
    }

    let maxSum = 0;
    let n = values.length;

    for (let i = 0; i < n / 2; i++) {
        maxSum = Math.max(maxSum, values[i] + values[n - 1 - i]);
    }

    return maxSum;
    
};