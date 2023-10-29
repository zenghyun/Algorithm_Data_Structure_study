// 1152 

let input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let change = input.trim().split(" ");
change == "" ? console.log(0) : console.log(change.length);