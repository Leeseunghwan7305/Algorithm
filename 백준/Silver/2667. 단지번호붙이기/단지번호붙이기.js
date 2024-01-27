const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = input.shift();
const arr = input.map((item) => item.split("").map(Number));
const visited = Array.from(Array(arr.length), () =>
  Array(arr[0].length).fill(false)
);
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let count = 0;
let result = [];
let block = 0;
function DFS(X, Y) {
  if (arr[X][Y] === 1 && visited[X][Y] === false) {
    visited[X][Y] = true;
    block++;
    for (let i = 0; i < 4; i++) {
      let nextX = X + dx[i];
      let nextY = Y + dy[i];

      if (
        nextX >= 0 &&
        nextX < arr[0].length &&
        nextY >= 0 &&
        nextY < arr.length &&
        arr[nextX][nextY] === 1
      ) {
        DFS(nextX, nextY);
      }
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 1 && visited[i][j] === false) {
      DFS(i, j);
      result.push(block);
      block = 0;
      count++;
    }
  }
}

console.log(count);
console.log(result.sort((a, b) => a - b).join("\n"));
