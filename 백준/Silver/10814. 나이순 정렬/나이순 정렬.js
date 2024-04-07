const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input.shift());
let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" "));
}

arr.sort((a, b) => {
  if (+a[0] !== +b[0]) {
    return +a[0] - +b[0];
  } else if (+a[0] === +b[0]) {
    return 1;
  }
});

let result = "";
for (let i = 0; i < arr.length; i++) {
  result += +arr[i][0] + " " + arr[i][1] + "\n";
}

console.log(result.trim());
