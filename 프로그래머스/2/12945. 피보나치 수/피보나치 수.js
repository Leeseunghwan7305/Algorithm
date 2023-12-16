function solution(n) {
    
    let dy= Array.from({length:n+1},()=>0);
    dy[1]=1;
dy[2]=1;
    for(let i=3;i<=n;i++)
        {
            dy[i]=(dy[i-1]+dy[i-2])%1234567;
        }
    
    return dy[dy.length-1]
}