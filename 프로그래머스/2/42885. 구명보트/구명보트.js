function solution(people, limit) {
    
    people.sort((a,b)=>a-b);
    
    let result=0;
    while(people.length)
        {
            if(people[0]+people[people.length-1]<=limit)
                {
                 result++;
                people.pop();
                people.shift();
                }
            else{
                result++;
                 people.pop();
            }
        }
    
    return result;
}