// 8393 1 ~ N 합 구하기

const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = Number(input[0]);


const f = (num) => {
    return ( num * (num+1) ) / 2;
}

f(data);