/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const rowMap = new Map();

    for (let i = 0; i < n; i++) {
        const rowKey = grid[i].join(',');
        rowMap.set(rowKey, (rowMap.get(rowKey) || 0) + 1);
    }

    let count = 0;
    for (let j = 0; j < n; j++) {
        const col = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        const colKey = col.join(',');
        if (rowMap.has(colKey)) {
            count += rowMap.get(colKey);
        }
    }

    return count;
    
};