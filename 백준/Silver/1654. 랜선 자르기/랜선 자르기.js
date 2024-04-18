const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let wood = +input[0].split(" ")[1];

let list = input.slice(1).map(Number);

let lt = 1;
let rt = Math.max(...list);

let result = 0;
list.sort((a, b) => a - b);
while (lt <= rt) {
  mid = parseInt((lt + rt) / 2);

  let sum = list
    .map((el) => {
      return parseInt(el / mid);
    })
    .reduce((acc, cur) => acc + cur, 0);

  if (sum >= wood) {
    lt = mid + 1;
    if (result < mid) {
      result = mid;
    }
  } else if (sum < wood) {
    rt = mid - 1;
  }
}
console.log(result);
