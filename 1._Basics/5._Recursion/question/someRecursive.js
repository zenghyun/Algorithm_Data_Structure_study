/*

someRecursive

배열과 콜백을 받는 someRecursive라는 재귀 함수를 작성하세요.
콜백에 전달될 때 배열의 단일 값이 true를 반환하면 함수는 true를 반환합니다.
그렇지 않으면 false를 반환합니다.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(){
  // add whatever parameters you deem necessary - good luck!
}
*/

const isOdd = (val) => {
    return val % 2 !== 0;
}

const someRecursive = (arr, isOdd) => {
    if(arr.length === 0) return false; 
    return isOdd(arr[0]) || someRecursive(arr.slice(1), isOdd);
};

console.log( someRecursive([1,2,3,4], isOdd) ); // true
console.log( someRecursive([4,6,8,9], isOdd) ); // true
console.log( someRecursive([4,6,8], isOdd) ); // false
console.log( someRecursive([4,6,8], val => val > 10) ); // false