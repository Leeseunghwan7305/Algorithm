const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let count = 1;
let [init, goal] = input;

while (goal !== init) {
  if (goal % 2 === 0) {
    goal = Math.floor(goal / 2);
  } else if (goal % 10 === 1) {
    goal = Math.floor(goal / 10);
  } else {
    console.log(-1);
    break;
  }
  count++;

  if (+goal === +init) {
    console.log(count);
    break;
  }
  if (goal < init) {
    console.log(-1);
    break;
  }
}
