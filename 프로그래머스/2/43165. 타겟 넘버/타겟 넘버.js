function solution(numbers, target) {
    
    let len = numbers.length;
    let count=0;
    function DFS(V,sum)
    {
        if(V===len)
            {
                if(sum===target)
                    {
                        count++;     
                    }
                return;
            }
        else{
            DFS(V+1,sum+numbers[V]);
            DFS(V+1,sum-numbers[V]);
        }
    }

    DFS(0,0)
    return count;


}