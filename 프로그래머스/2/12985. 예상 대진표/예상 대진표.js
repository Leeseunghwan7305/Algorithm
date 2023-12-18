function solution(n,a,b)
{
    let result=0;
    while(a!==b)
        {
            result++;
            a=Math.ceil(a/2);
            b=Math.ceil(b/2);
            
            }
        
    return result;
}


