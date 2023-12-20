function solution(triangle) {
    const dy = Array.from({length:triangle.length},()=>Array(triangle.length).fill(0))
    dy[0][0]=triangle[0][0];

    for(let i=1;i<triangle.length;i++)
        {
            for(let j=0;j<triangle[i].length;j++)
                {
                    if(j===0)
                        {
                             dy[i][j]=Math.max(dy[i-1][j]) + triangle[i][j]
                        }
                    else if (j===triangle[i].length-1)
                        {
                             dy[i][j]=Math.max(dy[i-1][j-1]) + triangle[i][j]
                        }
                    else{
                        dy[i][j]=Math.max(dy[i-1][j],dy[i-1][j-1]) + triangle[i][j]
                    }
                }
        }
    
    
    return Math.max(...dy[triangle.length-1])
}

//
///
////