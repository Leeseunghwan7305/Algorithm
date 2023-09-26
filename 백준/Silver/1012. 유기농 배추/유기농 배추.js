let fs = require("fs");
const { format } = require("path");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [T, ...veget] = input;

for (let i = 0; i < T; i++) {
  let graph = Array.from(Array(51), () => Array(51));
  let num = veget.shift().split(" ").map(Number);
  let line = veget.splice(0, num[2]);
  //제거한 요소를 담은 배열
  //veget은 남은게 저장됨
  let line2 = line.map((i) => i.split(" ").map(Number));
  for (const [a, b] of line2) {
    graph[a][b] = 1;
  }

  let answer = 0;
  let n = graph.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  function DFS(x, y) {
    graph[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        answer++;
        DFS(i, j);
      }
    }
  }
  console.log(answer);
}
