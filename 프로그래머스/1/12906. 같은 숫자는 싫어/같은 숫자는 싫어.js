function solution(arr)
{
    let stack = [arr[0]];
    
    for(const data of arr)
        {
            if(stack[stack.length-1]!==data)
                {
                    stack.push(data);
                }
        }

    return stack;
}