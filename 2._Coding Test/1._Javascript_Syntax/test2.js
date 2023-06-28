let data = [5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,5, 2, 9, 8, 4,];


function getSum(n) { 
    let sum = 0; 

    for(let i =0; i < n.length; i++){
        sum += n[i];
    }
    console.log(sum);
}
const t1 = performance.now();
getSum(data);
const t2 = performance.now();

console.log((t2-t1) / 1000 + ' second');

function getSum2(n) {
    let sum = n.reduce((pre, cur) => pre + cur);
    console.log(sum);
}

const t3 = performance.now();
getSum2(data);
const t4 = performance.now();

console.log((t4-t3) / 1000 + ' second');

// 직접 값을 설정하여 초기화
let arr1 = [8, 1, 4, 5, 7];

// 길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr2 = new Array(5).fill(0);

console.log(arr1);

console.log(arr2);



let mySet = new Set(); // 집합 객체 생성

// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

// 원소 5 제거 
mySet.delete(5);



// 원소를 하나씩 출력 
for (let item of mySet) console.log(item)


console.log("그는 \"비범함\"을 보였다.");