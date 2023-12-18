function solution(k, tangerine) {
    
    let map = new Map();
    let result=0;
    for(let i of tangerine)
{
    if(map.has(i))
        {
            map.set(i,map.get(i)+1)
        }
    else{
        map.set(i,1);
    }
}    
let arr =[...map].sort((a,b)=>b[1]-a[1])
    
    for(let i=0;i<arr.length;i++)
        {
            if(k>arr[i][1])
                {
                 k=k-arr[i][1]
                    
                 result++;    
                    
                }
            else{
                 return result+1;
            }
      
        }
    
}