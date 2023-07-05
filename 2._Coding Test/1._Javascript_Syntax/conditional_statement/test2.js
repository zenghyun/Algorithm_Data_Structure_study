let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

let log = "";
minute >= 45
  ? (log = `${hour} ${minute - 45}`)
  : hour !== 0
  ? (log = `${hour - 1} ${minute - 45 + 60}`)
  : (log = `${hour - 1 + 24} ${minute - 45 + 60}`);

  console.log(log);