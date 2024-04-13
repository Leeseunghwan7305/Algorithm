const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
let list = input.map((item) => {
  return +item;
});

const arr = Array.from({ length: 100 }, () => 0);

arr[0] = 0;
arr[1] = 1;
arr[2] = 1;

for (let i = 3; i < 100; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

let result = [];
let result2 = "";
for (let i = 0; i < list.length; i++) {
  let index = arr.filter((item) => item <= list[i]);

  for (let j = index.length - 1; j >= 0; j--) {
    if (list[i] - index[j] >= 0) {
      list[i] -= index[j];
      result.push(index[j]);
    }

    if (list[i] === 0) {
      result2 += result.reverse().join(" ");
      break;
    }
  }
  result2 += "\n";
  result = [];
}
console.log(result2.trim());
