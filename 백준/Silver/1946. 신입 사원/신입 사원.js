const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [T, ...data] = input;

for (let i = 0; i < T; i++) {
  let N = +data.shift();

  const list = data
    .splice(0, N)
    .map((i) => i.split(" ").map((i) => +i))
    .sort((a, b) => a[0] - b[0]);
  let count = 1;
  let minRank = list[0][1];

  for (let j = 1; j < list.length; j++) {
    if (minRank > list[j][1]) {
      minRank = list[j][1];
      count++;
    }
  }
  console.log(count);
}
