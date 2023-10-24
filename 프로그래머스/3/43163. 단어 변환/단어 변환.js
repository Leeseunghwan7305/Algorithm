function solution(begin, target, words) {
    let answer = 0;
    let usedCheck = Array.from({ length: words.length }, () => 0);
    function DFS(begin,target,count)
    {
         if(begin===target)
                    {
                        answer = count;
                return ;
                    }
        for(let i=0;i<words.length;i++)
            {   
                 if(usedCheck[i]==1) continue;
                let success=0;
               for (let j = 0; j < begin.length; j++){
                if(begin.charAt(j) == words[i].charAt(j)) {
                    success++;
                }
            }
                if(success===begin.length-1)
                    {
                        usedCheck[i] = 1;
                        DFS(words[i],target,count+1);
                        usedCheck[i] = 0;
                    }
            }
    }
    
     DFS(begin,target,0)
    return answer
}