/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
        if (target > x + y) return false;
    
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    return target % gcd(x, y) === 0;
};