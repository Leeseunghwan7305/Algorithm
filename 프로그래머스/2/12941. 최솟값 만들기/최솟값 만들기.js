function solution(A,B){
    let newA=A.sort((a,b)=>a-b);
    let newB=B.sort((a,b)=>b-a);
    
    
    let result=0;
    
    
    
    
    for(let i=0;i<newA.length;i++)
        {
            result+= newA[i] * newB[i]
        }
    
    return result;
}


