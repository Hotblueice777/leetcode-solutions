/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
        let freq = new Map();

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let occurrences = [...freq.values()];
    let uniqueOccurrences = new Set(occurrences);

    return occurrences.length === uniqueOccurrences.size;
    
};