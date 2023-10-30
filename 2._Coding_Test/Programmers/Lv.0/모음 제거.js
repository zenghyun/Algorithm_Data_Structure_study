/**
 * 모음 제거
    https://school.programmers.co.kr/learn/courses/30/lessons/120849
 */

function solution(my_string) {
  var arr = ["a", "e", "i", "o", "u"];
  var answer = my_string;
  arr.forEach((alphabet) => {
    answer = [...answer].filter((w) => alphabet !== w);
  });
  return answer.join("");
}

console.log(solution("bus"));
console.log(solution("nice to meet you"));
