function solution(n, computers) {
    
    let result=0;
    //n : 컴퓨터의 개수
    //computers : 이어진 네트워크
      const visited = [];
    function dfs(V,visited,computers)
    {
        visited[V]=true;
        for(let j=0;j<computers.length;j++)
            {
                if(computers[V][j]===1 && !visited[j])
                    {
                        dfs(j,visited,computers);
                    }
            }
    }
    
    for(let i=0;i<n;i++)
        {
            if(!visited[i])
                {
            dfs(i,visited,computers)
            result++;          
                }
          
        }
    
    return result;
}