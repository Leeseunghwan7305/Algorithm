function solution(n) {
    
    let result=0;
    
    const dy = Array.from({length:n+1},()=>0);
    
    dy[1]=1;
    dy[2]=2;
    dy[3]=3;
    
    for(let i=3;i<=n;i++)
        {
            dy[i]=(dy[i-1]+dy[i-2]) %1234567;
        }
    
    return dy[n]
}