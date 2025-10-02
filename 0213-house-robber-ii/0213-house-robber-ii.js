/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
        if (nums.length === 1) return nums[0];

    function robLine(arr) {
        let prev1 = 0, prev2 = 0;
        for (let num of arr) {
            let temp = prev1;
            prev1 = Math.max(prev1, prev2 + num);
            prev2 = temp;
        }
        return prev1;
    }

    return Math.max(
        robLine(nums.slice(0, nums.length - 1)),
        robLine(nums.slice(1))
    );
};