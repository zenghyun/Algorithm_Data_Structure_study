let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [hour, minute] = input[0].split(' ').map(Number);
let needMinute = Number(input[1]);

let mm = minute + needMinute;

while (mm >= 60) {
  hour >= 23 ? (hour = 0) : hour++;
  mm -= 60;
}
console.log(`${hour} ${mm}`);
