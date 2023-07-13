/*

productOfArray
숫자 배열을 받아 모두의 곱을 반환하는 productOfArray라는 함수를 작성하세요.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
*/

const productOfArray = (arr) => {
  return arr[0] * productOfArray(arr.slice(1))
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
