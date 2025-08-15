/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
      products.sort(); 

  
  const lowerBound = (arr, target, lo = 0) => {
    let l = lo, r = arr.length;
    while (l < r) {
      const m = (l + r) >> 1;
      if (arr[m] < target) l = m + 1;
      else r = m;
    }
    return l;
  };

  const res = [];
  let start = 0; 
  const n = products.length;

  for (let i = 1; i <= searchWord.length; i++) {
    const pref = searchWord.slice(0, i);
    start = lowerBound(products, pref, start);

    const bucket = [];
    for (let j = start; j < Math.min(start + 3, n); j++) {
      if (products[j].startsWith(pref)) bucket.push(products[j]);
      else break; 
    }
    res.push(bucket);
  }
  return res;
};