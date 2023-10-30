/**
 * 옷가게 할인 받기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120818
 */

function solution(price) {
  var answer;
  if (price >= 500000) {
     answer = price * 0.8;
  } else if (price >= 300000) {
     answer = price * 0.9;
  } else if (price >= 100000) {
     answer = price * 0.95;
  } else {
     answer = price;
  }
  return Math.floor(answer);
}

console.log(solution(580000));
console.log(solution(150000));
