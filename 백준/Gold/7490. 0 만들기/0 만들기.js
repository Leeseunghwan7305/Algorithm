const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = Number(input[0]);
let n = 0;

let arr = [];

for (let i = 1; i <= testCase; i += 1) {
  n = Number(input[i]);
  arr = [];
  for (let j = 1; j <= n; j += 1) {
    arr.push(j);
  }
  dfs([], 0);
  console.log("");
}

function dfs(array, depth) {
  if (depth === n - 1) {
    let line = "";
    for (let i = 0; i < n - 1; i += 1) {
      line += arr[i] + array[i];
    }
    line += `${arr[n - 1]}`;
    answer = eval(line.split(" ").join(""));
    if (answer === 0) console.log(line);
    return;
  }
  for (let j of [" ", "+", "-"]) {
    array.push(j);
    dfs(array, depth + 1);
    array.pop();
  }
}
