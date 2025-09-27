/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
      let i = 0;  

  function build(lower, upper) {
    if (i === preorder.length) return null;

    let val = preorder[i];
    if (val < lower || val > upper) return null; 

    i++;  
    const root = new TreeNode(val);
    root.left  = build(lower, val);   
    root.right = build(val, upper);   
    return root;
  }

  return build(-Infinity, Infinity);
};