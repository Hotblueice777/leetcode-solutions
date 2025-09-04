/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
      function build(lo, hi) {
    if (lo > hi) return null;                
    const mid = Math.floor((lo + hi) / 2);   
    const root = new TreeNode(nums[mid]);
    root.left  = build(lo, mid - 1);          
    root.right = build(mid + 1, hi);           
    return root;
  }
  return build(0, nums.length - 1);
};