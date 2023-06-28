/* 
    1에서부터 특정한 N 값과 사이에 있는 모든 숫자들을 더하는 함수를 만들어보세요. 
*/
 
// 1.
// Number of operations is (eventually) bounded by a multiple of n => O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1_000_000_000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// 2. 
// Always 3 operations => O(1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let t3 = performance.now();
addUpTo2(1_000_000_000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds.`);

// 3. 
// O(n)
function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('At the top! \nGoing down...');
    
    for(let j = n-1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

countUpAndDown(10);

// 4. 
// n이 커질수록 실행 시간이 n제곱의 값으로 늘어나는 경우 => O(n * n)

function printAllPairs(n) {
    for(let i = 0; i< n; i++) {
        for(let j = 0; j< n; j++) {
            console.log(i, j);
        }
    }
}