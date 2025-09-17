/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
        let p0 = 0;                 
    let curr = 0;               
    let p2 = nums.length - 1;   

    while (curr <= p2) {
        if (nums[curr] === 0) {
            [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
            p0++;
            curr++;
        } else if (nums[curr] === 2) {
            [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
            p2--;
            
        } else {
            curr++;
        }
    }
};