function solution(maps) {

    
    const dx=[1,0,-1,0];
    const dy =[0,1,0,-1];

    let visited = maps;
    const n = maps[0].length-1;
    const m =maps.length-1;
    visited[0][0]=0;
    
    let queue=[[0,0,1]];
    
    while(queue.length)
        {
            let [x,y,count]=queue.shift();
            
            
            if(x===n &&y===m)
              {
                 return count;
              }
            
            for(let i=0;i<4;i++)
                {
                    let nx =x+dx[i];
                    let ny =y+dy[i];
                    
                    if(nx>=0 && n>=nx &&m>=ny && ny>=0 &&visited[ny][nx]===1)
                        {
                            queue.push([nx,ny,count+1]);
                            visited[ny][nx]=0;
                        }
                    
                }
        }
     return -1;
    
}