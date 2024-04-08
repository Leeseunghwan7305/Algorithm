const fs = require("fs");
let [N, ...nums] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let money = nums.shift();

let result = 0;
let price = nums.length - 1;
while (money != 0) {
  result += parseInt(money / nums[price]);
  money %= nums[price];
  price--;
}
console.log(result);
