const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let [n, x] = input[0];
let arr = [0, ...input[1]];

let sum = 0;

for (let i = 1; i <= n; i++) {
  // 1부터 x번째 날의 방문자 수의 합
  if (i <= x) {
    sum += arr[i];
  }
}

let maxSum = sum; // 가장 큰 합
let count = 1; // 기간의 개수

let left = 1;
let right = x;

while (true) {
  left += 1;
  right += 1;
  if (right > n) break;

  sum = sum + arr[right] - arr[left - 1];
  if (maxSum === sum) count += 1;
  else if (maxSum < sum) {
    maxSum = sum;
    count = 1;
  }
}

if (maxSum === 0) {
  console.log("SAD");
} else {
  console.log(maxSum);
  console.log(count);
}
