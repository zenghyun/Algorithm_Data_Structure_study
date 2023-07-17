# Selection Sort
버블 정렬과 유사하지만 큰 값을 정렬된 위치에 먼저 배치하는 대신 작은 값을 정렬된 위치에 배치합니다. 

(큰 값을 배열 끝에 위치시키는 대신 작은 값을 한 번에 하나씩 위치에 배열합니다.)

버블 정렬과 마찬가지로 처음부터 끝까지 움직이지만, 실제 정렬된 데이터는 처음부터 누적되고 있습니다. 

<br>

### Selection Sort Pseudocode
- 지금까지 본 가장 작은 값으로 첫 번째 요소를 저장합니다.
- 더 작은 숫자를 찾을 때까지 이 항목을 배열의 다음 항목과 비교합니다.
- 더 작은 숫자가 발견되면 더 작은 숫자를 새로운 "최소값"으로 지정하고 어레이 끝까지 계속합니다.
- "최소값"이 처음에 시작한 값(인덱스)이 아닌 경우 두 값을 서로 바꿉니다.
- 배열이 정렬될 때까지 다음 요소에 대해 이 작업을 반복합니다.

<br>

```js
// O(N^2)
const selectionSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([34, 22, 10, 19, 17]));
```