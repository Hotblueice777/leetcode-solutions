/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
      if (!root) return 0;

  const leftDepth = (node) => {
    let d = 0;
    while (node) { d++; node = node.left; }
    return d;
  };

  const rightDepth = (node) => {
    let d = 0;
    while (node) { d++; node = node.right; }
    return d;
  };

  const ld = leftDepth(root);
  const rd = rightDepth(root);

  if (ld === rd) return Math.pow(2, ld) - 1;

  return 1 + countNodes(root.left) + countNodes(root.right);
};