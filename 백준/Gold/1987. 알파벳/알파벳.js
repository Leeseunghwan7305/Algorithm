const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift().split(" ").map(Number);

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let board = [];

for (let alpha of input) {
  board.push(alpha.split(""));
}
let max = 0;

let visited = new Set();

function DFS(x, y, count) {
  max = Math.max(max, count);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < board[0].length && ny >= 0 && ny < board.length) {
      if (visited.has(board[ny][nx])) continue;
      visited.add(board[ny][nx]);
      DFS(nx, ny, count + 1);
      visited.delete(board[ny][nx]);
    }
  }
}

visited.add(board[0][0]);
DFS(0, 0, 1, [board[0][0]]);

console.log(max);
