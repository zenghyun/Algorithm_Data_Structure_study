// 2739 구구단 

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const data = Number(input[0]);

const f = (data) => {
    for(let i = 1; i<10; i ++ ){
        console.log(`${data} * ${i} = ${data*i} `);
    }
};

f(data);