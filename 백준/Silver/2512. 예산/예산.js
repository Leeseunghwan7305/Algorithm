const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let list = input[1].split(" ").map(Number);

list.sort((a, b) => a - b);

let max = +input[2];
let arr = [];
let lt = 0;
let rt = Math.max(...list);
while (lt <= rt) {
  mid = parseInt((lt + rt) / 2);
  let newList = list.map((item) => {
    if (item < mid) return item;
    else return mid;
  });
  let newSum = newList.reduce((acc, cur) => acc + cur, 0);
  if (newSum === max) {
    console.log(mid);
    return;
  } else if (newSum < max) {
    arr.push(mid);
    lt = mid + 1;
  } else {
    rt = mid - 1;
  }
}

console.log(arr.sort((a, b) => b - a)[0]);
