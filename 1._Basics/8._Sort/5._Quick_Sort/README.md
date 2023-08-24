## Quick Sort
- 병합 정렬과 마찬가지로 0 또는 1개의 요소로 구성된 배열이 항상 정렬된다는 사실을 활용합니다.
- 하나의 요소("피벗"이라고 함)를 선택하고 정렬된 배열에서 피벗이 끝나야 하는 인덱스를 찾는 방식으로 작동합니다.
- 피벗이 적절하게 배치되면 피벗 양쪽에 퀵 정렬을 적용할 수 있습니다. 

### Pivot Helper
- 병합 정렬을 구현하려면 먼저 피벗 양쪽의 배열 요소를 배열하는 기능을 구현하는 것이 유용합니다.
- 배열이 주어지면 이 도우미 함수는 요소를 피벗으로 지정해야 합니다.
- 그런 다음 피벗보다 작은 모든 값은 피벗의 왼쪽으로 이동하고 피벗보다 큰 모든 값은 피벗의 오른쪽으로 이동하도록 배열의 요소를 재정렬해야 합니다.
- 피벗 양쪽에 있는 요소의 순서는 중요하지 않습니다!
- 도우미는 이 작업을 제자리에서 수행해야 합니다. 즉, 새 배열을 생성해서는 안 됩니다.
- 완료되면 도우미는 피벗 인덱스를 반환해야 합니다.

### Picking a pivot
- 빠른 정렬의 실행 시간은 부분적으로 피벗을 선택하는 방법에 따라 달라집니다.
- 이상적으로는 정렬하려는 데이터 세트의 대략 중앙값이 되도록 피벗을 선택해야 합니다.
- 단순화를 위해 항상 피벗을 첫 번째 요소로 선택합니다.

### Pivot Pseudocode 
- 세 가지 인수인 배열, 시작 인덱스, 끝 인덱스를 허용하는 것이 도움이 됩니다(각각 0과 배열 길이에서 1을 뺀 값을 지정할 수 있음).
- 배열의 시작 부분에서 피벗을 잡습니다.
- 현재 피벗 인덱스를 변수에 저장합니다(이것은 피벗이 끝나야 하는 위치를 추적합니다).
- 처음부터 끝까지 배열을 반복합니다.
  - 피벗이 현재 요소보다 큰 경우 피벗 인덱스 변수를 증가시킨 다음 현재 요소를 피벗 인덱스의 요소로 바꿉니다.

### Pivot Helper 
```js
const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

```

### Quicksort Pseudocode
- 배열에서 pivot helper를 호출합니다.
- helper가 업데이트된 pivot index를 반환하면 해당 index 왼쪽의 하위 배열과 해당 index 오른쪽의 하위 배열에서 pivot helper를 재귀적으로 호출합니다.
- 기본 사례는 요소가 2개 미만인 하위 배열을 고려할 때 발생합니다.

```js
const pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex-1);
        // right 
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
};

console.log(quickSort([4,6,9,1,2,5,3]));
```

### Big O of QuickSort

```js
    Time Complexity     Time Complexity     Time Complexity     Space Complexity
    (Best)              (Average)           (Worst)         
    
    O(nlogn)            O(nlogn)            O(n^2)              O(logn) 
```