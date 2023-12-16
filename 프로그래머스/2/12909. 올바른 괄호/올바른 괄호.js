function solution(s){
    
    let stack = [];
    
    for (let item of s )
        {
            if(item==="(")
                stack.push(item);
            else{
                if(stack.length===0)
                    {
                        return false;
                    }
                stack.pop();
            }
        }
    
    if(stack.length===0)
        {return true;
        }
    else{
        return false;
    }
    
}