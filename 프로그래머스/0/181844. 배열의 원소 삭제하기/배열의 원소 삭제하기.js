function solution(arr, delete_list) {

    for(let i=0;i<delete_list.length;i++)
        {
            let index =arr.indexOf(delete_list[i]);
            if(index===-1) continue;
               
                arr.splice(index,1);
               
            console.log(arr);
        }
    return arr;
}