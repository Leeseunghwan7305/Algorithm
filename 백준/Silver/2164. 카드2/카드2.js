let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());

class Node {
  constructor(num) {
    this.num = num;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.start = null;
    this.end = null;
    this._size = 0;
  }

  add(num) {
    const newNode = new Node(num);

    if (!this.start) this.start = newNode;
    else {
      this.end.next = newNode;
      newNode.prev = this.end;
    }

    this.end = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.start.num;
  }

  removeHead() {
    this.start = this.start.next;
    this.start.prev = null;
    this._size--;
  }
  getSize() {
    return this._size;
  }
}

const node = new LinkedList();

for (let i = 1; i <= n; i++) {
  node.add(i);
}
while (node.getSize() !== 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

console.log(node.getHead());
