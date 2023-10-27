function solution(n) {
    let result = Array(n).fill(0);
    result[0]=0;
    result[1]=1;
    for(let i=2;i<=n;i++)
        {
            result[i]=(result[i-1]+result[i-2])%1234567;
        }

    return result[n]
}