const depthFirstSearch = (graph,source) => {
    const stack = [source];
    const visited = new Set()
    visited.add(source)
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current)
        for (let neighbour of graph[current]) {
            if (!visited.has(neighbour)) {
                stack.push(neighbour)
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

depthFirstSearch(graph, "a");
