## SOME PATTERNS
### - Frequency Counter
### - Multiple Pointers
### - Sliding Window
### - Divide and Conquer
### - Dynamic Programming
### - Greedy Algorithms
### - Backtracking
### - Many more!

<br>

## Frequency Counter
이 패턴은 개체 또는 집합을 사용하여 값/값의 빈도를 수집합니다.

이렇게 하면 배열/문자열을 사용하는 중첩 루프 또는 O(N^2) 작업이 필요하지 않을 수 있습니다.

<br>

### An Example 
두 개의 배열을 받는 same이라는 함수를 작성하세요. 

첫 번째 배열의 제곱한 값이 두 번째 배열의 값과 동일할 경우 true를 반환합니다. 

값의 빈도는 동일해야 합니다.

```js
    same([1,2,3], [4, 1, 9]) // true
    same([1,2,3], [1, 9]) // false
    same([1,2,1], [4, 4, 1]) // false (must be same frequency)
```
<br>

### 풀이 

<br>

```js
// O(N^2)
const same = (arr1, arr2) => {
if(arr1.length !== arr2.length) false; 
for ( let i = 0; i< arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i]**2)
    if(correctIndex === -1) {
        return false;
    }
    arr2.splice(correctIndex,1);
}
return true;
};

// REFACTORED
// O(N)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }; 
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log( same([2,3,5], [4, 25, 9]) );
```
<br>

## Frequency Counter - validAnagram
두 개의 문자열이 주어지면 두 번째 문자열이 첫 번째 문자열의 anagram인지 확인하는 함수를 작성하십시오. 철자 바꾸기는 iceman에서 형성된 영화와 같이 다른 글자를 재배열하여 형성된 단어, 구 또는 이름입니다.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

**Time Complexity - O(n)**

<br>

```js
const validAnagram = (text1,text2) => {
    if(text1.length !== text2.length) {
        return false;
    };

    const lookup = {};

    for (let i = 0; i < text1.length; i++) {
        let letter = text1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i< text2.length; i++) {
        let letter = text2[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter]-= 1;
        }
    }
    return true;
}; 

console.log(validAnagram('qwerty','yertwq'));
```
<br>

## Multile Pointers

이 패턴의 개념은 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것입니다.

최소한의 공간 복잡성으로 문제를 해결하는 데 매우 효율적입니다.

<br>

### An Example 
정렬된 정수 배열을 받는 sumZero라는 함수를 작성하세요.

함수는 합계가 0인 첫 번째 쌍을 찾아야 합니다. 

쌍이 존재하지 않는 경우 합계가 0이거나 정의되지 않은 두 값을 모두 포함하는 배열을 반환합니다.

<br>

```js
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-3, -2, 0, 1, 2, 4, 6]));
```
<br>

### countUniqueValues 

countUniqueValues라는 함수를 구현하여 앞서 작업과 마찬가지로 정렬된 배열을 전달하면, 

해당 배열의 고유한 값의 개수를 반환하도록 한다. 

```js
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```
<br>

### solution 

```js
const countUniqueValues = (value) => {
    const arr = [...new Set(value)];
    return arr.length;
};

console.log( countUniqueValues([1, 1, 1, 1, 1, 2]) ); // 2
console.log( countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) ); // 7
console.log( countUniqueValues([]) ); // 0
console.log( countUniqueValues([-2, -1, -1, 0, 1]) ); // 4
```
<br>

## Sliding Window 
이 패턴에는 한 위치에서 다른 위치로 배열 또는 숫자가 될 수 있는 창을 만드는 작업이 포함됩니다.

특정 조건에 따라 창이 커지거나 닫힙니다(그리고 새로운 창이 생성됨).

배열/문자열 등에서 데이터의 하위 집합을 추적하는 데 매우 유용합니다.

<br>

### An Example
정수 배열과 n이라는 숫자를 받아들이는 maxSubarraySum이라는 함수를 작성하십시오.

이 함수는 배열에 있는 n개의 연속 요소의 최대 합계를 계산해야 합니다.

```js
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null

```
<br>

### Solution

<br>

```js
const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for(let i = 0; i< num; i ++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i< arr.length; i++) {
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log( maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log( maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log( maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log( maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log( maxSubarraySum([], 4)); // null
```
<br>

## Divide and Conquer 
이 패턴에는 데이터 세트를 더 작은 청크로 나눈 다음 데이터 하위 세트로 프로세스를 반복하는 것이 포함됩니다.

이 패턴은 시간 복잡성을 크게 줄일 수 있습니다.

<br>

### An Example 
정렬된 정수 배열이 주어지면 search라는 함수를 작성하십시오.

 이 함수는 값을 받아들이고 함수에 전달된 값이 있는 인덱스를 반환합니다. 값을 찾지 못하면 -1을 반환합니다.

 ```js
 search([1,2,3,4,5,6], 4) // 3
 search([1,2,3,4,5,6], 6) // 5
 search([1,2,3,4,5,6], 11) // -1
 ```

<br>

### Solution
<br>

```js
const search = (array, val) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

```