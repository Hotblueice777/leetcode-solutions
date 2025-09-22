/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
     nums1.sort((a, b) => a - b);

    let indexedNums2 = nums2.map((val, idx) => [val, idx]);
    indexedNums2.sort((a, b) => a[0] - b[0]);

    let res = new Array(nums1.length);
    let lo = 0, hi = nums2.length - 1;

    for (let num of nums1) {
        if (num > indexedNums2[lo][0]) {
            res[indexedNums2[lo][1]] = num;
            lo++;
        } else {
            res[indexedNums2[hi][1]] = num;
            hi--;
        }
    }
    return res;
};