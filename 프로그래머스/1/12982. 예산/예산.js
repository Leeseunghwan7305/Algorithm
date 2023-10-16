function solution(d, budget) {
   let money = d.sort((a,b)=>a-b);
 
    let currentSum=0;
    let result=0;
    for(M of money)
        {
            
            if(currentSum+M<=budget)
                {
                    currentSum+=M;
                    result++;
                }
            else{
                break;
            }
           
        }
   return result;
}