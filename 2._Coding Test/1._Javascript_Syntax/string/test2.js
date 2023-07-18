// 2675

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    let [r, s] = input[i].split(" ");
    let answer = "";
  for (let j = 0; j < s.length; j++) {
    answer += s.charAt(j).repeat(r);
  }
  console.log(answer);
}

