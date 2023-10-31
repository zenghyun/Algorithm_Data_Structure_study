/**
 * 최빈값 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/120812
 */

function solution(array) {
  var answer = {};
  for (let i = 0; i < array.length; i++) {
    answer[array[i]] = (answer[array[i]] || 0) + 1;
  }
  var values = Object.values(answer);
  var max = Math.max(...values);
  if (values.filter((v) => v === max).length > 1 || (array.length !== 1 && max === 1)) {
    return -1;
  }
  return Number(Object.keys(answer)[values.indexOf(max)]);
}

// function solution(arr) {
//   const obj = {};
//   arr.forEach(e=>{
//     if(obj[e]) obj[e]++
//     else obj[e] = 1
//   })
//   const values =  Object.values(obj);
//   const max = Math.max(...values)
//   if(values.filter(e => e === max).length > 1 || (arr.length !== 1 && max === 1)) return -1
//   return Number(Object.keys(obj)[values.indexOf(max)])
// }

console.log(solution([1, 2, 3, 3, 3, 4]));
console.log(solution([1, 1, 2, 2]));
console.log(solution([1]));
