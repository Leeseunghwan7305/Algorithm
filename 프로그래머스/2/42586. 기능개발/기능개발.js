function solution(progresses, speeds) {
    
    let result=[];
    let count=0;
    
    while(progresses.length)
        {
            count=0;
            while(progresses[0]<100)
                {
                    progresses=progresses.map((item,idx)=>progresses[idx]+speeds[idx]);
                }
            
            while(progresses[0]>=100)
                {
                    progresses.shift();
                    speeds.shift();
                    count++;
                }
            result.push(count);
        }


    return result;
}