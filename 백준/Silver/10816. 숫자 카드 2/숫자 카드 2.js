const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let FCard = input[1].split(" ").map((item) => +item);
let SCard = input[3].split(" ").map((item) => +item);

let macF = new Map();

for (let i = 0; i < FCard.length; i++) {
  if (macF.has(FCard[i])) {
    //카드가 있다면
    macF.set(FCard[i], macF.get(FCard[i]) + 1);
  } else {
    //없다면
    macF.set(FCard[i], 1);
  }
}

let result = "";
for (let i = 0; i < SCard.length; i++) {
  if (macF.has(SCard[i])) {
    result += macF.get(SCard[i]) + " ";
  } else {
    result += "0 ";
  }
}
console.log(result.trim());
