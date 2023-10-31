/**
 * 대충 만든 자판
 * https://school.programmers.co.kr/learn/courses/30/lessons/160586
 */

function solution(keymap, targets) {
  let answer = [];
  let map = new Map();

  keymap.forEach((keyword) => {
    for (let i = 0; i < keyword.length; i++) {
      map.has(keyword[i])
        ? map.set(keyword[i], Math.min(map.get(keyword[i]), i + 1))
        : map.set(keyword[i], i + 1);
    }
  });
  console.log(map);

  targets.forEach(target => {
    let sum = 0;
    for(let i = 0; i < target.length; i++) {
        if(map.has(target[i])) {
            console.log(map.get(target[i]));
            sum += map.get(target[i]);
        } else {
            sum = -1;
            break;
        }
    }
    answer.push(sum);
  })
  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9,4]
// console.log(solution(["AA"], ["B"])); // [-1]
// console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4,6]
