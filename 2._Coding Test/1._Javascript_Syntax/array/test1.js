// // 10818 최대, 최소
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const number = Number(input[0]);

let arr = input[1].split(" ").map(Number);

arr.sort((a,b) => a-b);

console.log(arr[0], arr[number-1]);

