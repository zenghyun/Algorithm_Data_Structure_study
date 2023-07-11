// 15552  뺘른 A+B
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const data = Number(input[0]);

let answer = "";
for (let i = 1; i <= data; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += a + b + "\n";
}
console.log(answer);

