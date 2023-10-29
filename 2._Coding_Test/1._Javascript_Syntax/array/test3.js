// 3052

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n"); 

const data = input.map(Number); 

let arr = [];
for(let i = 0; i<10; i++) {
    arr.push(data[i] % 42);
}

let setArr = new Set(arr);

console.log(setArr.size);

const count = new Set(input.map( x => x % 42)).size;

console.log(count);



