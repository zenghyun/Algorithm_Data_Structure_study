// 덧셈 1000번
// let fs = require("fs");

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let line = input[0].split(" ");

// let a = parseInt(line[0], 10);
// let b = parseInt(line[1], 10);

// console.log(a + b);

// 곱셈 10998번
// let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// let line = input[0].split(" ");

// let a = parseInt(line[0], 10);
// let b = parseInt(line[1], 10);

// console.log(a * b);

// 사칙연산 10869번

// let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// let line = input[0].split(" ");

// let a = parseInt(line[0], 10);
// let b = parseInt(line[1], 10);

// onsole.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(parseInt(a / b, 10));
// console.log(a % b);

// 3자리수 곱셈 문제 2588번

let fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().split("\n");

let a = input[0];
let b = input[1];

console.log(Number(a) * Number(b[2]));
console.log(Number(a) * Number(b[1]));
console.log(Number(a) * Number(b[0]));
console.log(Number(a) * Number(b));
