/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    const dp2 = new Array(n + 1).fill(0); 

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2] + 2 * dp2[i-1]) % MOD;
        dp2[i] = (dp2[i-1] + dp[i-2]) % MOD;
    }

    return dp[n];

};