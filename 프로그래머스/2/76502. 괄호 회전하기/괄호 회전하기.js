function solution(s) {
    
    let fail=0;
    let success=0;
s=s.split("");   
    for(let i=0;i<s.length;i++)    
{
    //1회 회전
     let stack=[];
    s.push(s[0]);
    s.shift();
    let flag=true
    for(let item of s)
        {
            if(item==="(" ||  item==="{" || item ==="[")
                {
                    stack.push(item);
                }
            else{
                if(stack.length===0)
                    {
                     flag=false;
                        break;
                    }
                else if(item===")" && stack[stack.length-1]==="("||item==="}" && stack[stack.length-1]==="{"||item==="]" && stack[stack.length-1]==="[")
                    {
                        stack.pop();
                    }
            }
        }
    
    if(flag && stack.length===0)
        {
            success++;
        }
        
    
    
}
    return success
}