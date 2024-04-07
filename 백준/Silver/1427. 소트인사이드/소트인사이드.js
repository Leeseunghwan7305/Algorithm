const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();


console.log(
  Number(
    input
      .split("")
      .map((i) => Number(i))
      .sort((a, b) => b - a)
      .join("")
  )
);
