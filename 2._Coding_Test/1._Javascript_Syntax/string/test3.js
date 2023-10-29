// 2908 

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [num1, num2] = input[0].split(" "); 

const reverse =  (num) => {
    return num.split("").reverse().join("");
};
let realNum1 = reverse(num1);
let realNum2 = reverse(num2);

console.log(Math.max(realNum1, realNum2));