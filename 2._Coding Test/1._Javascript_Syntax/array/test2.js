// 2562 최댓값 구하기 

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 방법 1 
let arr = [];

for(let i = 0; i< 9; i++){
    arr.push(Number(input[i]));
}

let maxValue = arr.reduce((a,b) => Math.max(a,b));

for(let i = 0; i< 9; i++) {
    if(maxValue === Number(input[i])) {
        console.log(maxValue); 
        console.log(i+1);
    }
}

// 방법 2 
let data = input.map(Number);
let max = Math.max(...data);

console.log(max);
console.log(input.indexOf(max)+1);


