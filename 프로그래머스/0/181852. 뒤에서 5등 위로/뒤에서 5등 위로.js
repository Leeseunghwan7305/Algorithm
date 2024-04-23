function solution(num_list) {
let sortedList=num_list.sort((a,b)=>a-b).slice(5);
    
    return sortedList;
}