/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
        const adj = new Map();

   
    for (const [from, to] of connections) {
        if (!adj.has(from)) adj.set(from, []);
        if (!adj.has(to)) adj.set(to, []);
        adj.get(from).push([to, 1]);  
        adj.get(to).push([from, 0]);  
    }

    let count = 0;
    const visited = new Array(n).fill(false);

    const dfs = (node) => {
        visited[node] = true;

        for (const [neighbor, needsReversal] of adj.get(node)) {
            if (!visited[neighbor]) {
                count += needsReversal;
                dfs(neighbor);
            }
        }
    };

    dfs(0);
    return count;
};