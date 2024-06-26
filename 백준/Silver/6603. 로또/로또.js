const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let data = input[i].split(" ").map(Number);
  if (data[0] === 0) break;
  else {
    n = data[0];
    arr = data.slice(1);
    visited = new Array(n).fill(false);
    selected = [];
    answer = "";
    dfs(arr, 0, 0);
    console.log(answer);
  }
}

function dfs(arr, depth, start) {
  if (depth === 6) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }

  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}
