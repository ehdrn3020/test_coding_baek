n = 3
computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

function solution(n, computers) {
    let visited = [false];
    let answer = 0;

    function dfs(i) {
        console.log(`parameter i: ${i}`);
        visited[i] = true;
        console.log(`visited: ${visited}`)
        for(let j=0; j<computers[i].length; j++) {
            if(computers[i][j]===1 && !visited[j]){
                console.log('if(computers[i][j]===1 && !visited[j])');
                console.log(`i: ${i}, j:${j}`);
                dfs(j);
            }
        }
    }
    
    for (let i=0; i < computers.length; i++) {
        if (!visited[i]) {
            console.log('start');
            dfs(i)
            console.log('add answer');
            answer++;
        }
    }
    return answer;
}

k = solution(n, computers)
console.log(`result: ${k}`)