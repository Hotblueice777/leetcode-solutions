/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
        potions.sort((a, b) => a - b); // 对 potions 升序排序
    const result = [];

    for (let spell of spells) {
        let left = 0, right = potions.length - 1;
        let idx = potions.length;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (spell * potions[mid] >= success) {
                idx = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result.push(potions.length - idx);
    }

    return result;
};