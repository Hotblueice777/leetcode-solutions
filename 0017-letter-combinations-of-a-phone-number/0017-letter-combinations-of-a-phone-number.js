/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
        if (!digits.length) return [];

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const res = [];

    const backtrack = (index, path) => {
        if (index === digits.length) {
            res.push(path);
            return;
        }

        const letters = phoneMap[digits[index]];
        for (let char of letters) {
            backtrack(index + 1, path + char);
        }
    };

    backtrack(0, '');
    return res;
};