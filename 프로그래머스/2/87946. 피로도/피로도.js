function solution(k, dungeons) {
   let hp = k;
    let depth =0;
    let visited = new Array(dungeons.length).fill(false);
    let result=0;
    function DFS(count,hp)
    {
        for (let i=0;i<dungeons.length;i++)
            {
                if(!visited[i] &&hp>= dungeons[i][0])
                    {
                        visited[i] =true;
                     DFS(count+1,hp-dungeons[i][1])
                     visited[i]=false;
                    }
                 result = Math.max(count,result);
            }
    }
    
    
    
    DFS(0,hp)
    return result;
   
}