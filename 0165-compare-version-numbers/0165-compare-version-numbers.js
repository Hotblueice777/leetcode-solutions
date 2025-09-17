/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
        let i = 0, j = 0;
    const n = version1.length, m = version2.length;

    while (i < n || j < m) {
        // parse next number from version1
        let num1 = 0;
        while (i < n && version1[i] !== '.') {
            num1 = num1 * 10 + (version1.charCodeAt(i) - 48);
            i++;
        }

        // parse next number from version2
        let num2 = 0;
        while (j < m && version2[j] !== '.') {
            num2 = num2 * 10 + (version2.charCodeAt(j) - 48);
            j++;
        }

        if (num1 < num2) return -1;
        if (num1 > num2) return 1;

        // skip the dots
        i++; 
        j++;
    }
    return 0;
};