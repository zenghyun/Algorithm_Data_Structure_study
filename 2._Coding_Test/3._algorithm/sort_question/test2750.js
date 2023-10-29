// 백준 2750번

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const num = Number(input[0]);

let arr = [];
for(let i = 1; i <= num; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a,b) => a-b);

let result = "";

for(let i = 0; i < arr.length; i++) {
    result += arr[i] + "\n";
}

console.log(result);
