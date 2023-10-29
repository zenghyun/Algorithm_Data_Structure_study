// 1546

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n"); 

let data = Number(input[0]); 

let arr = input[1].split(" ").map(Number);

let max = Math.max(...arr); 
let sum = 0;
for(let i = 0; i< data; i ++) {
    sum += arr[i] / max * 100; 
}
console.log(sum / data);