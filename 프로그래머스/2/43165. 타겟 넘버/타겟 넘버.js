function solution(numbers, target) {
    
    let count=0;
    //DFS 
    1,1
    2,2
    3,3
    function DFS(V,sum)
    {
        if(V>numbers.length)
            {
                return;
            }
        
       if(V===numbers.length && sum ===target)
           {
               count++;
           }
        else{
            DFS(V+1,sum+numbers[V])
            DFS(V+1,sum-numbers[V])
        }
    }

    DFS(0,0)
return count;
}

// [이진트리]
// DFS 깊이 우선 탐색 (stack)(재귀)
// BFS 너비 우선 탐색 (queue)

// +1 -1 = target
//+ 1 +1+1+1+1
// -1+1+1+1+1

