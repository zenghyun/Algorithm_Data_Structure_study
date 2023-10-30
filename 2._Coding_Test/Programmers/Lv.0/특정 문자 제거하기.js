/**
 * 특정 문자 제거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120826
 */

function solution(my_string, letter) {
    // ver 1 return [...my_string].filter(alphabet => alphabet !== letter).join("");
    // ver 2 return my_string.split(letter).join("");
    // ver 3 return my_string.replaceAll(letter, "");
}

console.log(solution("BCBdbe", "B"));