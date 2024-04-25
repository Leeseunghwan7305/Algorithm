function solution(numbers) {
    let result = 0;
    let cache=[];
    const list = numbers.split("");
    const visited = Array.from({ length: list.length }, () => false);
    
    function DFS(V, depth) {
        if (depth > list.length) {
            return;
        }
        
        
        if (isSosu(+String(V))) {
            if(!cache.includes(+String(V)))
                {
                     cache.push(+String(V))
                       result++;
                }
         
        }
        
        for (let i = 0; i < list.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                DFS(V + list[i], depth + 1);
                visited[i] = false;
            }
        }
    }
    
    DFS("", 0);
    return result;
}
    
function isSosu(data) {
    if (data < 2) {
        return false;
    }
    
    for (let i = 2; i * i <= data; i++) {
        if (data % i === 0) {
            return false;
        }
    }
    
    return true;
}
