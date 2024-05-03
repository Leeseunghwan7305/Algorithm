const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let food = [];

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  food.push([a, b]);
}
let max = 999999999;
function dfs(L, 단거, 신거) {
  if (L === n) {
    if (단거 === 1 && 신거 === 0) return;
    if (max > Math.abs(단거 - 신거)) {
      max = Math.abs(단거 - 신거);
    }
    return;
  } else {
    dfs(L + 1, 단거 * food[L][0], 신거 + food[L][1]);
    dfs(L + 1, 단거, 신거);
  }
}
dfs(0, 1, 0);

console.log(max);
