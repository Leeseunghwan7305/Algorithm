function solution(n, computers) {
    let result=0;
    let visited =[];
    function DFS(V)
    {
        visited[V]=true;
        
        for(let i=0;i<computers[V].length;i++)
            {
                if(computers[V][i]===1 && !visited[i])
                    {
                        DFS(i);
                    }
            }
    }
    
    for(let i=0;i<computers.length;i++)
        {
            if(!visited[i])
                {
                    DFS(i)  
                    result++
                }
        }
    
    return result;
}