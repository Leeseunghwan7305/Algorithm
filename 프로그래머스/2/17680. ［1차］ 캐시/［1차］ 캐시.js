function solution(cacheSize, cities) {
    const cache=[];
    let result=0;
    if(cacheSize===0) return cities.length*5;
    cities=cities.map((item)=>item.toUpperCase());
    for(let i=0;i<Math.min(cities.length,cacheSize);i++)
        {
            if(cache.includes(cities[i]))
                {
                   cache.splice(cache.indexOf(cities[i]),1);
                    cache.push(cities[i]);
                    cacheSize+=1;
                    result+=1;
                }
            else{
            cache.push(cities[i]);
            result+=5;
            }
     }
    for(let i=cacheSize;i<cities.length;i++)
        {
            if(cache.includes(cities[i]))
                {
                    cache.splice(cache.indexOf(cities[i]),1);
                    cache.push(cities[i]);
                    result+=1;
                }
            else{
            cache.shift();
            cache.push(cities[i]);
            result+=5;
            }
        }
    return result;
}