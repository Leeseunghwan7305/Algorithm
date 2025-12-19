function solution(participant, completion) {
    const M = new Map();
    let result="";
    participant.forEach((item)=>{
        if(M.has(item))
            {
                 M.set(item, M.get(item)+1);
            }
        else{
            M.set(item,1);
        }
    })
    
    
    completion.forEach((item)=>{
        if(M.has(item))
            {
                M.set(item,M.get(item)-1);
            }
    })
    for (const [key, value] of M) {
        if(value===1)
            {
                result=key;
            }
    }
    return result;
}