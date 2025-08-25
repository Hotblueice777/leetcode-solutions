/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
      if (indexDiff < 1 || valueDiff < 0) return false;

  const w = valueDiff + 1;    
  const buckets = new Map();   

  const id = (x) => Math.floor(x / w); 

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const bid = id(x);

    if (buckets.has(bid)) return true;

    const left = buckets.get(bid - 1);
    if (left !== undefined && Math.abs(x - left) <= valueDiff) return true;

    const right = buckets.get(bid + 1);
    if (right !== undefined && Math.abs(x - right) <= valueDiff) return true;

    buckets.set(bid, x);

    if (i >= indexDiff) {
      const old = nums[i - indexDiff];
      buckets.delete(id(old));
    }
  }

  return false;
};