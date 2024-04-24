const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let data = +input[0];

let arr = Array.from({ length: data }, (v, i) => i + 1);
let visited = Array.from({ length: data }, () => false);

function DFS(V) {
  if (V === arr.length) {
    console.log(arr.join(" "));
    return;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        arr[V] = i + 1;
        DFS(V + 1);
        visited[i] = false;
      }
    }
  }
}

DFS(0);
