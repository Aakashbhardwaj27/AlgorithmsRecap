const breadthFirstSearch = (graph, source) => {
    const queue = [source];
    const visited = new Set();
    visited.add(source);
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current)
        for (let neighbour of graph[current]) {
            if (!visited.has(neighbour)) {
                queue.push(neighbour)
                visited.add(neighbour)
            }
        }
    }
}


const graph = {
    a: ["b", "c", "e"],
    b: ["d", "f"],
    c: ["a", "g"],
    d: [],
    e: ["h"],
    f: [],
    g: [],
    h: []
};

breadthFirstSearch(graph,"c")