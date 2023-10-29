// let p = [26, 45, 86, 54, 35];

// let q = p.sort((a,b) => b - a);

// console.log(q);

// let answer = '';

// /*
// 여러 출력 결과를 한 줄에 하나씩 출력할 때 매번 console.log()를 실행하지 않고, 하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 대개 더 빠르게 수행됩니다. 
// */

// for(let i =1; i<= 100; i++) {
//     answer += i + '\n'; // 문자열로 변환하여 기록
// }

// console.log(answer);


// let fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().split('\n');
// // let input = fs.readFileSync('input.txt').toString().split('\n');

// console.log(input[1].split(' '));

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    // 콘솔 입력 창에서 줄바꿈(Enter)을 입력할 때마다 호출
    input.push(line);
}).on('close', function() {
    // 콘솔 입력 창에서 Ctrl + C 혹은 Ctri + D를 입력하면 호출 (입력의 종료)
    console.log(input);
    process.exit();
})