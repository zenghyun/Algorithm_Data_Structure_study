## Javascript Library
- Javascript에서는 배열에 포함된 데이터를 정렬하는 sort() 함수를 제공한다.
- 최악의 경우 시간 복잡도 O(NlogN)을 보장한다. 
- 알고리즘 및 코딩 테스트 문제를 해결할 때 정렬 기능이 필요하다면, 단순히 sort() 함수를 사용하는 것을 권장한다.
- 만약, sort() 함수의 사용이 제한된다면, 병합 정렬과 같은 알고리즘을 직접 구현하여 사용하자. 

#### Example

```js
let arr1 = [15,1,33,56,7,89];
let arr2 = [15,1,33,56,7,89];

console.log(arr1.sort((a,b) => a-b));  // 오름차순
console.log(arr1.sort((a,b) => b-a));  // 내림차순
```

### 문자에 대한 오름차순 정렬 예시 
- 별도로 비교 함수를 사용하지 않으면, 유니코드 순으로 정렬된다.
- 따라서 함수를 적용하지 않음으로써, 간단히 문자열 정렬을 수행할 수 있다.

```js
let arr3 = ["fineapple", "banana", "durian", "apple", "carrot"];

console.log(arr3.sort()); // ["apple", "banana", "carrot", "durian", "fineapple"]
```

#### 대소문자 구분 x
```js
let arr3 = ["fineapple", "banana", "Durian", "Apple", "carrot"];

function compare(a, b) {
    let upperCaseA = a.toUpperCase();
    let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}

console.log(arr3.sort(compare));  // ["Apple", "banana", "carrot", "Durian", "fineapple"]
```


### 문자에 대한 내림차순 정렬 예시

```js
let arr3 = ["fineapple", "banana", "durian", "apple", "carrot"];

function compare(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}

console.log(arr3.sort(compare));
```
