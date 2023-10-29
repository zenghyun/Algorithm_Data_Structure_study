let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

 let [a,b,c] = input[0].split(" ").map(Number);

let m = 0;

a === b && a === c
  ? (m = 10000 + a * 1000)
  : (a === b || b === c || a === c)
  ? (m = 1000 +  (a === b ? a : c) * 100)
  : (m = Math.max(a, b, c) * 100);

  console.log(m);