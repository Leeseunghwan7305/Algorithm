const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input.shift());

input.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
  } else {
    return a.length - b.length;
  }
});

console.log([...new Set(input)].join("\n"));
