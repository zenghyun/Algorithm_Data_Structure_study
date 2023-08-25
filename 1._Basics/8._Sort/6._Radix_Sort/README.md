## Radix Sort
- 기수 정렬은 숫자 목록에서 작동하는 특수 정렬 알고리즘입니다.
- 요소간 비교는 절대 하지 않습니다!
- 숫자의 크기에 대한 정보가 자릿수로 인코딩된다는 사실을 이용합니다.
- 숫자가 많을수록 숫자가 커집니다!

## Radix Sort Helpers 
- 기수 정렬을 구현하려면 먼저 몇 가지 도우미 함수를 구축하는 것이 도움이 됩니다.
  getDigit(num, place) - 주어진 자릿값에서 num의 숫자를 반환합니다.

```js
  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  getDigit(12345, 0); // 5
  getDigit(12345, 1); // 4
  getDigit(12345, 2); // 3
  getDigit(12345, 3); // 2
  getDigit(12345, 4); // 1
  getDigit(12345, 5); // 0 
  ```

  <br>
- digitCount(num) - num의 자릿수를 반환합니다.

<br>

```js
function digitCount(num) {
    if (num === 0) return 1; 
    return Math.floor(Math.log10(Math.abs(num))) + 1;

}

digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3
```

-MostDigits(nums) - 숫자 배열이 주어지면 목록에서 가장 큰 숫자의 자릿수를 반환합니다.

```js
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2

```

### Radix Sort Pseudocode
- 숫자 목록을 허용하는 함수 정의
- 가장 큰 숫자의 자릿수가 몇 개인지 알아보세요.
- **n=0**부터 가장 큰 자릿수까지 반복합니다.
- 루프의 각 반복에 대해:
  - 각 숫자(0~9)에 대한 버킷 생성
  - n**번째** 숫자를 기준으로 해당 버킷에 각 숫자를 배치합니다.
- 기존 배열을 0부터 시작하여 최대 9까지의 버킷 값으로 교체합니다.
- 마지막에 반환 목록!

```js
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let n = 0; n < maxDigitCount; n++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], n);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
    console.log(nums);
}
return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

```


### Big O of Radix Sort 

```js
    Time Complexity     Time Complexity     Time Complexity     Space Complexity
    (Best)              (Average)           (Worst)         
    
         O(nk)            O(nk)               O(nk)              O(n+k) 

    n - length of array
    k - number of digits(average)
```