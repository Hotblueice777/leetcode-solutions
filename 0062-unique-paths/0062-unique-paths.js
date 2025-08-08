/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

  const a = m + n - 2;
  const b = Math.min(m - 1, n - 1);
  let res = 1;

  for (let i = 1; i <= b; i++) {
    res = res * (a - b + i) / i;
  }

  return Math.round(res); 
};