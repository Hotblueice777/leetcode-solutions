/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let hold = -prices[0]; 
  let cash = 0;          

  for (let i = 1; i < prices.length; i++) {
    const p = prices[i];
    const prevCash = cash;
    
    cash = Math.max(cash, hold + p - fee);
    hold = Math.max(hold, prevCash - p);
  }
  return cash;
};