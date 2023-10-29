// 1316
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

let summary = 0;

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] != data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      }
      setData.add(data[i + 1]);
    }
  }
  return true;
}

for (let j = 1; j <= num; j++) {
  let data = input[j];
  if (check(data)) summary += 1;
}
console.log(summary);
