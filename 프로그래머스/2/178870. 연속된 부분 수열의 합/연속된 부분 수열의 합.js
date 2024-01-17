function solution(sequence, k) {
    let result=[];
    
    let left =0;
    let right=0;
    let sum=0;
    sum+=sequence[left];
    while(left<=right)
        {
            
            if(sum>k)
                {
                   sum-=sequence[left];
                   left++;
                }
            else if (sum<k)
                {
                    right++;
                    sum+=sequence[right];
                }
            else {
                result.push([left,right]);
                sum+=sequence[++right];
            }
            
              if(right>sequence.length-1 || left>sequence.length-1) break;
        }
    

    
    result.sort((a,b)=> {
        
        if(a[1]-a[0] > b[1]-b[0])
            {
                return -1;
            }
        else if(a[1]-a[0]===b[1]-b[0])
            {
                if(a[0] >b[0])
                    {return -1}
                else if(a[0]<=b[0])
                    {
                        return 1;
                    }
            }
        else {
            return 1;
        }
    
    })
               return result.at(-1)
    
}