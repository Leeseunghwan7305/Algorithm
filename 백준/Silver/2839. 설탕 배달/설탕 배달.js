const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let sugar = +input;
let count = 0;
while (sugar > 0) {
  if (sugar % 5 === 0) {
    count += sugar / 5;
    break;
  }
  sugar -= 3;
  count++;
  if (sugar < 0) {
    count = -1;
    break;
  }
}
console.log(count);
