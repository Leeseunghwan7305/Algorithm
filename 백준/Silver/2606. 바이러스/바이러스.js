let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = +input.shift(); // 정점의 개수 (N)
let m = +input.shift(); // 간선의 개수 (M)

let grape = Array.from({ length: n + 1 }, () => Array());
let cnt = 0;

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i - 1].split(" ").map(Number);
  grape[a].push(b);
  grape[b].push(a);
}

let visited = Array.from({ length: n + 1 }).fill(false);

function DFS(V) {
  if (visited[V]) {
    return;
  }
  visited[V] = true;
  cnt++;
  for (let a of grape[V]) {
    if (!visited[a]) {
      DFS(a);
    }
  }
}

DFS(1);

console.log(cnt - 1);
