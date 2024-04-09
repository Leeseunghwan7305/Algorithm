const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let num = +input;
let init = 0;
let i = 1;
let count = 0;

while (1) {
  init += i;

  if (num < init) {
    console.log(count);
    break;
  }

  count++;
  i++;
}
