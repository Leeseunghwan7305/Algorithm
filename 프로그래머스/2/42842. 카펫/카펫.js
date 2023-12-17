function solution(brown, yellow) {
    
let result=[];

    for(let i=3;i<brown;i++)
        {
            for(let j=3;j<brown;j++)
                {
                    if(i*j === brown + yellow && (i-2) * (j-2)===yellow)
                        {
                            result[0]=i;
                            result[1]=j;
                        }
                }
        }
    return result;
    
    
}