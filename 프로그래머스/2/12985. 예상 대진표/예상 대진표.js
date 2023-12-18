function solution(n,a,b)
{
    let result=0;
    while(1)
        {
            result++;
                if(a%2===1)
                    {
                        a=(a+1)/2;
                    }
                else{
                    a=a/2;
                }
                
                if(b%2===1)
                    {
                        b=(b+1)/2;
                    }
                else{
                    b=b/2;
                }
            
            if(a===b)
                {
                    return result;
                }
            }
        
}


