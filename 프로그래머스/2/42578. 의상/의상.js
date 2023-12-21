function solution(clothes) {
    const map = new Map();
    let result=1;
    
    for(let i=0;i<clothes.length;i++)
        {
            if(map.has(clothes[i][1]))
                {
                    map.set(clothes[i][1],map.get(clothes[i][1])+1)
                }
            else{
                map.set(clothes[i][1],1);
            }
        }
    
    
    for(let [key,value] of map)
        {
            result*=(value+1)
        }
    
    return result-1;
}