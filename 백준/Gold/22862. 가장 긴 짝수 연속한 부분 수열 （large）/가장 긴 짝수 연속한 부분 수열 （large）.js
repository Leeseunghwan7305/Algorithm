const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let result = 0;
let eraseCount = 0;

for (let start = 0, end = 0; start < N; start++) {
  while (end < N) {
    if (arr[end] % 2 === 0) end++;
    else {
      if (eraseCount == K) break;
      eraseCount++;
      end++;
    }
  }
  result = Math.max(result, end - start - eraseCount);
  if (arr[start] % 2 === 1) eraseCount--;
}

console.log(result);
