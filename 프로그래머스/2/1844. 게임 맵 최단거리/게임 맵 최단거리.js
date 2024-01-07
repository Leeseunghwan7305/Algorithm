function solution(maps) {
    
    let dy=[-1,0,1,0];
    let dx = [0,1,0,-1];
    
    // dfs가 아닌 bfs로 풀어야함 맵 최단거리이기 떄문에
    let result=-1;
    
    const queue=[];
    queue.push([0,0,1]);
    
    while(queue.length)
        {
       const [y,x,V] = queue.shift();
           if(x===maps[0].length-1 && y===maps.length-1)
            {
                result=V;
                break;
            }

        for(let i=0;i<4;i++)
            {
                
                let NX= dx[i]+x
                let NY=dy[i]+y
                if(NY<maps.length && NY>=0 && NX>=0 && NX<maps[0].length && maps[NY][NX]===1)
                    {
                        maps[NY][NX]=0
                         queue.push([NY,NX,V+1])         
                    }
               
            }

        
        
        }
    
    return result;
}