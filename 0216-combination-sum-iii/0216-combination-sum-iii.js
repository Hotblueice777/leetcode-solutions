/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
  const path = [];

  function dfs(start, kLeft, sumLeft) {
    if (kLeft === 0) {
      if (sumLeft === 0) res.push([...path]);
      return;
    }

    const minSum = ((start + (start + kLeft - 1)) * kLeft) / 2;
    const maxSum = ((9 + (9 - kLeft + 1)) * kLeft) / 2;
    if (sumLeft < minSum || sumLeft > maxSum) return;

    for (let i = start; i <= 9 - kLeft + 1; i++) {
      path.push(i);
      dfs(i + 1, kLeft - 1, sumLeft - i);
      path.pop();
    }
  }

  dfs(1, k, n);
  return res;  
};