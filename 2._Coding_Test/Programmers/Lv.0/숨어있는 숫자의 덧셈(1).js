/**
 * 숨어있는 숫자의 덧셈 (1)
 * https://school.programmers.co.kr/learn/courses/30/lessons/120851
 */

function solution(my_string) {
    var answer = [...my_string].map(v => Number(v)).filter(num => num).reduce((pre,cur) => pre+cur);
    return answer;
}

console.log(solution("aAb1B2cC34oOp"));