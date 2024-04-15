const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();

for (let i = 0; i < input.length; i++) {
  let lt = 0;
  let rt = input[i].length - 1;
  let Lchance = 0;
  let Rchance = 0;
  while (lt < rt) {
    if (input[i][lt] === input[i][rt]) {
      lt++;
      rt--;
    } else if (input[i][lt + 1] === input[i][rt]) {
      lt += 2;
      rt--;
      Lchance++;
    } else {
      Lchance = 2;
      break;
    }
  }

  lt = 0;
  rt = input[i].length - 1;

  while (lt < rt) {
    if (input[i][lt] === input[i][rt]) {
      lt++;
      rt--;
    } else if (input[i][lt] === input[i][rt - 1]) {
      lt += 1;
      rt -= 2;
      Rchance++;
    } else {
      Rchance = 2;
      break;
    }
  }

  if (Math.min(Lchance, Rchance) === 0) {
    console.log(0);
  } else if (Math.min(Lchance, Rchance) === 1) {
    console.log(1);
  } else {
    console.log(2);
  }
}
