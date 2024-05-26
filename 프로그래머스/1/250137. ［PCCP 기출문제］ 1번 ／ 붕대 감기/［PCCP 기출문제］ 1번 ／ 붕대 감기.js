function solution(bandage, health, attacks) {
    let time = attacks[attacks.length-1][0];
    let currentHP = health
    let [bandageTime,hill,bandageBonus] = bandage;
    let successHill =0;
    for(let i=1;i<=time;i++)
        {
            if(attacks[0][0] === i)
                {
                    currentHP-=attacks[0][1];
                    attacks.shift();
                    successHill=0;
                }
            else{
                   currentHP+=hill;
            if(health <currentHP+hill)
                {
                    currentHP=health
                }
            
                    successHill+=1;
            }
            
            if(currentHP <=0)
                {
                    return -1;
                }
            
            if(successHill===bandageTime){
                currentHP+=bandageBonus
                successHill=0;
                 if(health <currentHP+bandageBonus)
                {
                    currentHP=health
                }
            }
            
        }
    
    return currentHP;
}