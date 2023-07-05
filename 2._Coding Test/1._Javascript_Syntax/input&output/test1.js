// 덧셈 1000번
let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let a = parseInt(line[0], 10);
let b = parseInt(line[1], 10);

console.log(a + b);