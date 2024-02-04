let expression = require("fs").readFileSync("/dev/stdin").toString().trim();

expression = expression.split("-");

expression = expression.map((v) => {
  return v.split("+").reduce((pre, cur) => +pre + +cur, 0);
});

let result = expression.reduce((pre, cur) => pre - cur);
console.log(result);
