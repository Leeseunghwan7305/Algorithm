function solution(priorities, location) {
    
    let find = priorities[location];
    let max = Math.max(...priorities);
    let count=0;
    while(location!==-1)
        {
            if(priorities[0]===max)
                {
                    priorities.shift();
                      max = Math.max(...priorities);
                    count++;
                }
            else{
                 priorities.push(priorities.shift());
                if(location===0)
                    {
                        location=priorities.length;
                    }
            }
            location--;
           
        }
    
    return count;
}