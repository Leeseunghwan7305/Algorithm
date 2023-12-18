function solution(arr) {
    
    let max =Math.max(...arr);
    while(max++)
        {
            let flag=false;
            for(let i=0;i<arr.length;i++)
                {
                    if(max % arr[i] !==0)
                        {
                            flag=false;
                            break;
                        }
                        flag=true;
                }
            if(flag)
                {
                    break;
                }
        }
    return max;
}