function solution(n, times) {
    //기다리는 사람 n
    // 한 명을 심시하는데 걸리는 시간 배열
    times.sort((a,b)=>a-b);
    
let lt =1;
    let rt = Math.max(...times)*n;
    let result =rt;
 
    while(lt<=rt)
        {
            let mid = parseInt((lt+rt)/2);
            let data=0;
            for(let i=0;i<times.length;i++)
                {
                data += parseInt(mid/times[i]);
                }
            
            if(data >=n)
                {
                rt = mid-1;
                result = Math.min(mid,result);
                }
            else{
                lt = mid+1;
              
            }
            
        }
    return result;
}