const [n, ...coords] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => {
    return i.split(" ").map((x) => +x);
  });
let result = coords.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else if (a[1] == b[1]) {
    return a[0] - b[0];
  }
});

let answer = "";
for (let [a, b] of result) {
  answer += a + " " + b + "\n";
}
console.log(answer);
