/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
        let left = 1;
    let right = Math.max(...piles);

    const canEatAll = (speed) => {
        let time = 0;
        for (let pile of piles) {
            time += Math.floor((pile + speed - 1) / speed);
        }
        return time <= h;
    };

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};