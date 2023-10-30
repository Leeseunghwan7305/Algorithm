function solution(n, times) {
    times = times.sort((a,b)=>a-b);
    let left =1;
    let right = n*times[times.length-1];
    let result=right;
    while(left<=right)
        {
            let count =0;
            let mid = Math.floor((left+right)/2);
            times.forEach((time)=>{
                count+= Math.floor(mid/time);
            })            
            if(count>=n)
                {
                    right=mid-1;
                    result = Math.min(mid,result);
                }
            if(count<n)
                {
                    left= mid+1;
                }
        }
    return result;
}