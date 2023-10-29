// 세수 정렬 백준 2752번

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);

let result = "";

for (let i = 0; i < arr.length; i++) {
  result += `${arr[i]} `;
}

console.log(result);