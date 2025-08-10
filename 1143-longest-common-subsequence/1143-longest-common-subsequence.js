/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
      const m = text1.length, n = text2.length;
  let dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    const cur = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        cur[j] = dp[j - 1] + 1;  
      } else {
        cur[j] = Math.max(dp[j], cur[j - 1]); 
      }
    }
    dp = cur;
  }
  return dp[n];
};