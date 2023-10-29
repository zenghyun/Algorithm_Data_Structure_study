// 사칙연산 10869번

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let a = parseInt(line[0], 10);
let b = parseInt(line[1], 10);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b, 10));
console.log(a % b);
