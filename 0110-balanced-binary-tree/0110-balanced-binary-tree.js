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
 * @return {boolean}
 */
var isBalanced = function(root) {
      function height(node) {
    if (!node) return 0;

    const lh = height(node.left);
    if (lh === -1) return -1;              

    const rh = height(node.right);
    if (rh === -1) return -1;                

    if (Math.abs(lh - rh) > 1) return -1;   
    return Math.max(lh, rh) + 1;            
  }

  return height(root) !== -1;
};