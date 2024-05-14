const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const k = parseInt(input[0]);
const flow = input[1].split(" ");

let max = "";
let min = "";

let visited = new Array(10).fill(false);

function dfs(level, prev, number) {
  if (level === k) {
    if (!min) min = number;
    max = number;
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (!visited[i]) {
      if (
        (flow[level] === "<" && prev < i) ||
        (flow[level] === ">" && prev > i)
      ) {
        visited[i] = true;
        dfs(level + 1, i, number + i.toString());
        visited[i] = false;
      }
    }
  }
}

for (let i = 0; i < 10; i++) {
  visited[i] = true;
  dfs(0, i, i.toString());
  visited[i] = false;
}

console.log(max);
console.log(min);
