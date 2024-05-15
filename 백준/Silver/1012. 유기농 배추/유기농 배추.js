const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
function dfs(graph, n, m, x, y) {
  // 깊이 우선 탐색(DFS) 수행
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  //현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] === 1) {
    //해당 노드를 방문 처리
    graph[x][y] = -1;

    for (let i = 0; i < 4; i++) {
      dfs(graph, n, m, x + dx[i], y + dy[i]);
    }
    return true;
  }
  return false;
}

let testCases = Number(input[0]); //테스트 케이스의 수
let line = 1;
while (testCases--) {
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }

  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) {
        answer++;
      }
    }
  }
  line += k + 1;
  console.log(answer);
}
