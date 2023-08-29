## 병합 정렬 (Merge Sort)
병합 정렬은 전형적인 분할 정복(divide and conquer) 알고리즘이다.

### 분할 정복 (divide and conquer)

1. 분할(divide): 큰 문제를 작은 부분 문제(쉬운 문제)로 분할한다.
2. 정복(conquer): 작은 부분 문제를 각각 해결한다.
3. 조합(combine): 해결한 부분 문제의 답을 이용하여 다시 큰 문제를 해결한다. 

- 분할 정복은 일반적으로 재귀 함수를 이용하여 구현한다.
- 그 이유는? => 큰 문제를 작은 문제로 "분할하는 방식이 동일한" 경우가 많기 떄문이다.
- 더 이상 쪼갤 수 없는 크기가 될 때까지 계속하여 분할한다. 

### 분할 정복의 단점
- 일반적으로 재귀 함수를 사용한다는 점에서 함수 호출 횟수가 많이 발생한다.
- 이는 **오버헤드(overhead)** 로 이어진다. 

### 병합 정렬의 특징
- 시간 복잡도 O(NlogN)을 보장하는 빠른 정렬 알고리즘 중 하나이다. 

### 병합 정렬의 시간 복잡도(Time Complexity)
- 직관적으로 생각했을 때, 높이가 O(logN)이고, 너비가 O(N)인 정사각형과 유사하다.
- 따라서 최악의 경우 시간 복잡도는 O(NlogN)이다.
- 장점: 최악의 경우에도 O(NlogN)을 보장할 수 있다는 점에서 효율적이다.
- 단점: 일반적인 경우, 정복(conquer) 과정에서 임시 배열이 필요하다. 

```js
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let results = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([35, 2, 16, 24, 9]));

```