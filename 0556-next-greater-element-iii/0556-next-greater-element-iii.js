/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
        let digits = n.toString().split('').map(Number);
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i+1]) {
        i--;
    }
    if (i < 0) return -1;

    let j = digits.length - 1;
    while (j >= 0 && digits[j] <= digits[i]) {
        j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];

    let left = i+1, right = digits.length-1;
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }

    let res = parseInt(digits.join(''), 10);
    return res > 2**31 - 1 ? -1 : res;
};