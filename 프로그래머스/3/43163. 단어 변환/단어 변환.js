function solution(begin, target, words) {
    var answer = 0;
    
    let visited = Array.from({length:words.length},()=>0)
    let min=999;
    function DFS(V,word)
    {
        if(V>words.length)
            {
                return;
            }
        
        if(word === target)
            {
                
             min = Math.min(V,min);
                return ;
            }
        
        else{
            for(let i=0;i<words.length;i++)
                {
                    if(!visited[i])
                        {
                        let count=0;
                    
                    for(let j=0;j<words[i].length;j++)
                        {
                            if(words[i][j]!==word[j])
                                {
                                    count++;
                                }
                        }
                    
                    if(count===1)
                        {
                            visited[i]=1;
                            DFS(V+1,words[i])
                            visited[i]=0;
                        }
                        }
                  
                }
        }
    }
     DFS(0,begin)
    
    return min===999?0 :min;
}