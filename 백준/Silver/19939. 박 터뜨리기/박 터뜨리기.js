const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [ballNum, buckets] = input[0].split(" ").map((v) => +v);

let line = 0;
let result = 0;
for (let i = 0; i < buckets; i++) {
  line += i + 1;
}
if (ballNum < line) {
  console.log(-1);
  return;
}

let reLine = ballNum - line;

if (reLine % buckets !== 0) {
  result += 1;
}

result += buckets - 1;
console.log(result);
