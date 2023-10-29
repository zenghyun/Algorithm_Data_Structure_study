// 2438  star

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const data = Number(input[0]);

let star ="";
for(let i = 1; i<= data; i++) {
    star += "*";
    console.log(star);
}

