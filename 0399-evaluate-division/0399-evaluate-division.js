/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
        const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    const dfs = (start, end, visited) => {
        if (!(start in graph) || !(end in graph)) return -1.0;
        if (start === end) return 1.0;

        visited.add(start);

        for (const [neighbor, weight] of graph[start]) {
            if (!visited.has(neighbor)) {
                const product = dfs(neighbor, end, visited);
                if (product !== -1.0) {
                    return weight * product;
                }
            }
        }

        return -1.0;
    };

    const result = [];
    for (const [num, denom] of queries) {
        const visited = new Set();
        result.push(dfs(num, denom, visited));
    }

    return result;
};