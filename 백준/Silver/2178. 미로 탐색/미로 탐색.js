const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(Number));
const [goalY, goalX] = [N - 1, M - 1];

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let queue = [];
queue.push([0, 0, 1]);

function BFS() {
  while (queue.length) {
    let [y, x, V] = queue.shift();
    if (x === goalX && y === goalY) {
      console.log(V);
      return;
    }
    for (let i = 0; i < 4; i++) {
      const nextY = y + dy[i];
      const nextX = x + dx[i];
      if (
        nextY >= 0 &&
        nextY <= goalY &&
        nextX >= 0 &&
        nextX <= goalX &&
        maze[nextY][nextX] === 1
      ) {
        maze[nextY][nextX] = 0;
        queue.push([nextY, nextX, V + 1]);
      }
    }
  }
}

BFS();
