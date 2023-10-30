/**
 * 추억 점수
 * https://school.programmers.co.kr/learn/courses/30/lessons/176963
 */

function solution(name, yearning, photo) {
  var answer = Array.from({ length: photo.length }, () => new Array());
  for (let photoNum in photo) {
    for (let nameNum in name) {
      let i = photo[photoNum].indexOf(name[nameNum]) === -1 ? 0 : 1;
      answer[photoNum].push(i * yearning[nameNum]);
    }
    answer[photoNum] = answer[photoNum].reduce((pre, cur) => pre + cur);
  }
  return answer;
}
