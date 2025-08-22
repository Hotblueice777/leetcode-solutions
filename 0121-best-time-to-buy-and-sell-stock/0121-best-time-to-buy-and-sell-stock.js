/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
      let minPrice = Infinity;   
  let maxProfit = 0;        

  for (const p of prices) {  
    if (p < minPrice) {      
      minPrice = p;          
    } else {                 
      const profit = p - minPrice; 
      if (profit > maxProfit) {    
        maxProfit = profit;        
      }
    }
  }
  return maxProfit;   
};