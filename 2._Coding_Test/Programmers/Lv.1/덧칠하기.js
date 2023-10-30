/**
 * 덧칠하기 
 * https://school.programmers.co.kr/learn/courses/30/lessons/161989
 */

function solution(n, m, section) {
    let tried = 0
    let maxRange = 0;
    section.forEach(range=>{
        if(maxRange < range){
            tried++
            maxRange = range+m-1
        }
    })
    return tried;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5,4,[1,3])) // 1
console.log(solution(4,1,[1,2,3,4])) // 4

