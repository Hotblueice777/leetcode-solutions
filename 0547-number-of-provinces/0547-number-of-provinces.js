/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
       const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinces = 0;

    const dfs = (city) => {
        for (let other = 0; other < n; other++) {
            if (isConnected[city][other] === 1 && !visited[other]) {
                visited[other] = true;
                dfs(other);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            provinces++;
        }
    }

    return provinces; 
};