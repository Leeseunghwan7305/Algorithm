const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let list = input[1].split(" ").map(Number);

list.reverse();

let d = [0];

for (x of list) {
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    let index = lowerBound(d, x);
    d[index] = x;
  }
}

console.log(+input[0] - (d.length - 1));

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}