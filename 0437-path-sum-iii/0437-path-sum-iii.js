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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {

        const prefixSums = new Map();
    prefixSums.set(0, 1); 
    const dfs = (node, currSum) => {
        if (!node) return 0;

        currSum += node.val;

        let count = prefixSums.get(currSum - targetSum) || 0;

        prefixSums.set(currSum, (prefixSums.get(currSum) || 0) + 1);

        count += dfs(node.left, currSum);
        count += dfs(node.right, currSum);

        prefixSums.set(currSum, prefixSums.get(currSum) - 1);

        return count;
    };

    return dfs(root, 0);
    
};