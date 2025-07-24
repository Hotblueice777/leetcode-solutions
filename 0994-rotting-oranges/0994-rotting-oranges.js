/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let fresh = 0;

    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]); 
            } else if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let minutes = 0;

    while (queue.length > 0) {
        const [r, c, min] = queue.shift();
        minutes = Math.max(minutes, min);

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                grid[nr][nc] === 1
            ) {
                grid[nr][nc] = 2; 
                fresh--;
                queue.push([nr, nc, min + 1]);
            }
        }
    }

    return fresh === 0 ? minutes : -1;
};