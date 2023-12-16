function solution(n) {
    let N = n.toString(2);
    let Ncount=0;
    let NNcount=0;
    for(let i=0;i<N.length;i++)
        {
            if(N[i]==="1")
                {
                    Ncount++;
                }
        }
    
    while(1)
        {
            n++;
            let N = (n).toString(2);
    for(let i=0;i<N.length;i++)
        {
            if(N[i]==="1")
                {
                    NNcount++;
                }
        }
            
            if(Ncount ===NNcount)
                {
                    return parseInt(N,2);
                }
            else{
                NNcount=0;
            }
        }
    
}