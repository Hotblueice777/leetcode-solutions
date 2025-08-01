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
var maxLevelSum = function(root) {

     if (!root) return 0;

    let queue = [root];
    let maxSum = -Infinity;
    let maxLevel = 1;
    let currentLevel = 1;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

        currentLevel++;
    }

    return maxLevel;
    
};