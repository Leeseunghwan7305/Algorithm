function solution(number, k) {
    
    const stack = [];
    let result = "";
    
    for (let i=0;i<number.length;i++)
        {
            let num = number[i];
            
            while(k>0 && stack[stack.length-1]<num)
                {
                    stack.pop();
                    k--;
                }
            stack.push(num);
        }
    
    stack.splice(stack.length-k,k);
    result = stack.join("");
    return result;
            
    
    
}