/*

fib
숫자를 받아들이고 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하세요.
피보나치 수열은 1과 1로 시작하는 정수 1, 1, 2, 3, 5, 8, ...의 수열입니다.
이후의 모든 숫자는 이전 두 숫자의 합과 같습니다.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
*/

const fib = (num) => {
    if(num <= 2) return 1; 
    return fib(num-2) + fib(num-1);
};


console.log( fib(4)  );// 3
console.log( fib(10) ); // 55
console.log( fib(28) ); // 317811
console.log( fib(35) ); // 9227465

