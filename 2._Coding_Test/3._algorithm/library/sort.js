// let arr1 = [15, 1, 33, 56, 7, 89];
// let arr2 = [15, 1, 33, 56, 7, 89];

// console.log(arr1.sort((a, b) => a - b));
// console.log(arr1.sort((a, b) => b - a));

// let arr3 = ["fineapple", "banana", "Durian", "Apple", "carrot"];

// function compare(a, b) {
//     let upperCaseA = a.toUpperCase();
//     let upperCaseB = b.toUpperCase();
//   if (upperCaseA < upperCaseB) return -1;
//   else if (upperCaseA > upperCaseB) return 1;
//   else return 0;
// }

// // console.log(arr3.sort());
// console.log(arr3.sort(compare));


let arr = [
    {name: "홍길동", score:90},
    {name: "김철수", score:85},
    {name: "박영희", score:97},
];

const compare = (a,b) => {
    return b.score - a.score;
};

console.log(arr.sort(compare));