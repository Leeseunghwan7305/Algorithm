function solution(maps) {
    const dy = [0, 0, 1, -1];
    const dx = [-1, 1, 0, 0];
    
    const goalX=maps[0].length-1;
    const goalY=maps.length-1;
    
    const queue = [];
    queue.push([0, 0, 1]);
    
     while(queue.length) {
        const [y, x, move] = queue.shift();
        if(y === goalY && x === goalX) return move;
        
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny =y + dy[i];
            if(ny >= 0 && ny < maps.length&& nx >= 0 && nx <maps[0].length && maps[ny][nx] === 1) {
                queue.push([ny, nx, move + 1]);
                maps[ny][nx] = 0;
            }
        }
    }
    
    return -1;
   
}