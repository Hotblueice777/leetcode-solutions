/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   const target = nums.length - k; 
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    
    const pivotIdx = left + Math.floor(Math.random() * (right - left + 1));
    const pivotVal = nums[pivotIdx];
   
    [nums[left], nums[pivotIdx]] = [nums[pivotIdx], nums[left]];

   
    let lt = left;          
    let gt = right;
    let i = left + 1;
    while (i <= gt) {
      if (nums[i] < pivotVal) {
        [nums[i], nums[lt]] = [nums[lt], nums[i]];
        lt++; i++;
      } else if (nums[i] > pivotVal) {
        [nums[i], nums[gt]] = [nums[gt], nums[i]];
        gt--;
      } else {
        i++;
      }
    }

   
    if (target < lt) {
      right = lt - 1;
    } else if (target > gt) {
      left = gt + 1;
    } else {
      return nums[target]; 
    }
  }
  // 理论上不会到这里
  return -1;
};