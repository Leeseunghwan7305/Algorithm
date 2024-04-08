const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let persons = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let times = 0;
let result = 0;

for (time of persons) {
  times += time;
  result += times;
}
console.log(result);
