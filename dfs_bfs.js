/*
    A
   B C
  D  G H I
 E F      J
*/

// 두개의 큐를 이용한 BFS
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};

const bfs = (graph, startNode) => {
    let visited = [] // finished search
    let needVisit = [] // will search

    needVisit.push(startNode)

    while(needVisit.length !=0) {
        const node = needVisit.shift()

        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
            visited.push(node); 
            needVisit = [...needVisit, ...graph[node]]
        }
    }
    return visited;
}

// console.log(bfs(graph, "A"));

const dfs = (graph, startNode) => {
    const visited = []; // 탐색을 마친 노드들
    let needVisit = []; // 탐색해야할 노드들 

    needVisit.push(startNode);
    
    while (needVisit.length !== 0) {
        console.log("visited:"+visited)
        console.log("needVisit:"+needVisit)

        const node = needVisit.shift();
        console.log("node:"+node)
        // queue이기 때문에 선입선출, shift()를 사용한다.
        if (!visited.includes(node)) { // 해당 노드가 탐색된 적 없다면
        visited.push(node); 
        needVisit = [...graph[node], ...needVisit];
        }
    }
    return visited
}

console.log(dfs(graph, "A"))