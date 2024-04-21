const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const N = input[0];
const M = input[1];
let answer = "";
let ch = Array.from({ length: N + 1 }, () => 0);
let tmp = Array.from({ length: M }, () => 0);

function DFS(L) {
  if (L == M) {
    answer += tmp.slice().join(" ") + "\n";
  } else {
    for (let i = 1; i <= N; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        tmp[L] = i;
        DFS(L + 1);
        ch[i] = 0;
      }
    }
  }
}
DFS(0);
console.log(answer.trim());
