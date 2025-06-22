/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curr = 0;
    let maxAlt = 0;

    for (let i = 0; i < gain.length; i++) {
        curr += gain[i];
        maxAlt = Math.max(maxAlt, curr);
    }

    return maxAlt;
    
};