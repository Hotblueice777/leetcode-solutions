/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
        function match(query, pattern) {
        let i = 0, j = 0;
        while (i < query.length) {
            if (j < pattern.length && query[i] === pattern[j]) {
                i++; j++;
            } else {
                if (query[i] >= 'A' && query[i] <= 'Z') {
                    return false; 
                }
                i++; 
            }
        }
        return j === pattern.length;
    }
    
    return queries.map(q => match(q, pattern));
};