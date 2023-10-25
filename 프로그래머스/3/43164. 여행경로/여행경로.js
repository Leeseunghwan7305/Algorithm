function solution(tickets) {
    tickets.sort();
    let visited=Array(tickets.length).fill(false);
    let answer = [];
    function dfs(cur,cnt,path){
        if(cnt===tickets.length && answer.length===0){
            answer=path;
            return;
        }
        for(let i=0;i<tickets.length;i++){
            if(visited[i])continue;
            if(tickets[i][0]===cur){ 
                visited[i]=true;
                dfs(tickets[i][1],cnt+1,[...path,tickets[i][1]]);
                visited[i]=false;
            }
        }
    }
    dfs("ICN",0,["ICN"])
    return answer;
}