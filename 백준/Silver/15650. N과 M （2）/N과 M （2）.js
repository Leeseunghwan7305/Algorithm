const fs = require("fs");

let [n, m] = (fs.readFileSync("/dev/stdin") + "").toString().trim().split(" ");

// 중복이 없어야 하므로 check 변수 선언
// 몇개를 넣어야하는지 알아야하므로 tmp 변수 선언

let ch = Array.from({ length: n + 1 }, () => 0);
let tmp = Array.from({ length: m }, () => 0);

let arr = [];

function DFS(L) {
  if (L == m) {
    return arr.push(tmp.slice());
  } else {
    for (let i = 1; i <= n; i++) {
      if (ch[i] == 0) {
        if (L > 0 && tmp[L - 1] >= i) {
          continue;
        }
        ch[i] = 1;
        tmp[L] = i;
        DFS(L + 1);
        ch[i] = 0;
      }
    }
  }
}
DFS(0);
console.log(
  arr
    .map((item) => item.join(" "))
    .join("\n")
    .trim()
);
