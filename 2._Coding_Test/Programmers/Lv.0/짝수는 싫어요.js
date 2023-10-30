/**
 * 짝수는 싫어요
 * https://school.programmers.co.kr/learn/courses/30/lessons/120813
 */

function solution(n) {
  var answer = Array.from({ length: n }, (_, j) => j + 1).filter(
    (v) => v % 2 !== 0
  );
  return answer;
}

console.log(solution(10));
console.log(solution(15));
