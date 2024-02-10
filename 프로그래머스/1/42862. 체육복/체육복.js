//전체 학생 수 n
// 체육복을 도난당한 학생들의 번호가 담긴 배열 lost
// 여벌의 체육복을 가져온 학생들의 번호 reserve
function solution(n, lost, reserve) {

let realLost = lost.filter((item)=> !reserve.includes(item));
let realReserve = reserve.filter((item)=> !lost.includes(item));
let result = n-realLost.length;
    
realLost.sort((a,b)=>a-b);
realReserve.sort((a,b)=>a-b);
    
    for(let i=0;i<realReserve.length;i++)
        {
            
            for(let j=0;j<realLost.length;j++)
                {
                    if(realReserve[i]+1 === realLost[j] || realReserve[i]-1 === realLost[j])
                        {
                            result++;
                            realLost[j]=-99;
                            break;
                        }
                }
        }
    
    return result;
}

