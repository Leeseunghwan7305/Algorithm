function solution(brown, yellow) {
    //카펫 조각의 총 합
  const sum = brown + yellow ;
    
for(let height=3;height<=brown;height++)
    {
        if(sum %height===0)
            {
                let width = sum /height;
                
            if((width-2) *(height-2) ===yellow)
                {
                    return [width,height];
                }
            }
    }
}