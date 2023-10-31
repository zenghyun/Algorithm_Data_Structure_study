/**
 * 분수의 덧셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/120808
 */

function solution(numer1, denom1, numer2, denom2) {
  var [numer, denom] = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
  var maxValue = Math.max(numer,denom);
  var minValue = Math.min(numer,denom);
  
  for(let i = minValue; i > 1; i--) {
    if(maxValue % i === 0 && minValue % i === 0) {
        numer = numer / i;
        denom = denom / i;
        break;
    }
  }
  return [numer, denom];
}

// console.log(solution(1, 2, 3, 4)); // [5,4]
// console.log(solution(9, 2, 1, 3)); // [29,6]
console.log(solution(9, 2, 1, 2)); // [29,6]
