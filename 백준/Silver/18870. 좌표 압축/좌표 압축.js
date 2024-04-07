const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);

let coordinate = input[0].split(" ").map(Number);

let seted = [...new Set(coordinate)];
let sorted = seted.sort((a, b) => a - b);

let order = {};

sorted.forEach((item, index) => {
  order[item] = index;
});
let result = "";
coordinate.forEach((item) => {
  result += order[item] + " ";
});
console.log(result.trim());
