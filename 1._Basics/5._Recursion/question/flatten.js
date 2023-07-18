/*

flatten

배열의 배열을 받아들이고 모든 값이 평평한 새 배열을 반환하는 flatten이라는 재귀 함수를 작성하십시오.

function flatten(){
  // add whatever parameters you deem necessary - good luck!
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3] 

*/
const flatten = (arr) => {
    var newArr = []; 

    for(let i = 0; i< arr.length; i++) {
        if(Array.isArray(arr[i])) {
           newArr = newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        } 
    }
    return newArr;
};

// console.log( flatten([1, 2, 3, [4, 5] ]) ); // [1, 2, 3, 4, 5]
// console.log( flatten([1, [2, [3, 4], [[5]]]]) ); // [1, 2, 3, 4, 5]
// console.log( flatten([[1],[2],[3]]) ); // [1,2,3]
console.log( flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) ); // [1,2,3] 