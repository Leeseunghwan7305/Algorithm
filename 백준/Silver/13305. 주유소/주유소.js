const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let currentDistance = 0;
let distance = input[1].split(" ").map(Number);
let price = input[2].split(" ").map(Number);
let result = price[0] * distance[0];
let minPrice = price[0];

for (let i = 1; i < price.length; i++) {
  if (minPrice >= price[i]) {
    result += minPrice * currentDistance;
    currentDistance = 0;
    currentDistance += distance[i];
    minPrice = price[i];
  } else {
    currentDistance += distance[i];
  }
}
console.log(result);
