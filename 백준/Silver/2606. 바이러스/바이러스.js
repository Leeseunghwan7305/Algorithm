// const fs = require("fs");

// let input = (fs.readFileSync("../text.txt") + "")
//   .toString()
//   .trim()
//   .split("\r\n");
// let n = Number(input.shift());
// let m = Number(input.shift());

// let graph = [...new Array(n + 1)].map(() => []);
// let ch = new Array(n + 1).fill(0);
// let ans = 0;

// ch[1] = 1;

// const dfs = (start) => {
//   graph[start].map((dest) => {
//     if (!ch[dest]) {
//       ch[dest] = true;
//       ans += 1;
//       dfs(dest);
//     }
//   });
// };
// console.log(input);
// input.map((i) => {
//   const [start, dest] = i.split(" ").map((ele) => Number(ele));
//   graph[start].push(dest);
//   graph[dest].push(start);
// });

// dfs(1);

// console.log(ans);

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [computer, ...arr] = input;
computer = +computer;
arr.shift();
let birus = arr.map((i) => i.split(" ").map((i) => +i));

let graph = Array.from(Array(computer + 1), () => Array());
let ch = Array.from({ length: computer + 1 }, () => 0);
for (let [a, b] of birus) {
  graph[a].push(b);
  graph[b].push(a);
}
let path = [];

function DFS(V) {
  for (let a of graph[V]) {
    if (ch[a] == 0) {
      ch[a] = 1;
      path.push(a);
      DFS(a);
     
    }
  }
}
ch[1] = 1;
DFS(1);
let setPath = [...new Set(path)];
let result = setPath.length;

console.log(result);
