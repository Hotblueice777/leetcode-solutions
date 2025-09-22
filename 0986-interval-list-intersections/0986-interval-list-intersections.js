/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i = 0, j = 0;
    let res = [];

    while (i < firstList.length && j < secondList.length) {
        let [a1, a2] = firstList[i];
        let [b1, b2] = secondList[j];

        let lo = Math.max(a1, b1);
        let hi = Math.min(a2, b2);

        if (lo <= hi) {
            res.push([lo, hi]);
        }

        if (a2 < b2) {
            i++;
        } else {
            j++;
        }
    }

    return res;
};