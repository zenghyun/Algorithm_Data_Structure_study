/// 4344 

let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let data = Number(input[0]);

for(let i = 1; i<=data; i++){
    let area =input[i].split(" ").map(Number);
    let n = area[0];
    let sddd = (area.reduce((a,b) => a+b) - n) / n;
    let s = input[i].split(" ").map(Number).splice(1).filter(m => m > sddd);
    console.log(((s.length / (area.length-1)) * 100).toFixed(3)+"%");
}