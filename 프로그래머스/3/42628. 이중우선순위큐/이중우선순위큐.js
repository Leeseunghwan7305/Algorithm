function solution(operations) {
    let queue=[]
    operations.forEach((item)=>{
        let type =item.split(" ")[0];
        let number = item.split(" ")[1];
        
        if(type==="D" && number==="-1")
            {
               queue.splice(queue.indexOf(Math.min(...queue)),1); 
            }
        else if(type==="D" && number==="1"){
             queue.splice(queue.indexOf(Math.max(...queue)),1); 
        }
        else{
            queue.push(+number);
        }
    })
    if(queue.length===0)
        {
            return [0,0]
        }
    else{
        return [Math.max(...queue),Math.min(...queue)];
    }
}