## 선택 정렬 (Selection Sort)
- 선택 정렬은 매 단계에서 가장 작은 원소를 선택해서 앞으로 보내는 정렬 방법이다.
- 앞으로 보내진 원소는 더 이상 위치가 변경되지 않는다.
- 시간 복잡도 **O(N^2)**로 비효율적인 정렬 알고리즘 중 하나이다.

### 선택 정렬 동작 방식
1. 각 단계에서 가장 작은 원소를 선택한다.
2. 현재까지 처리되지 않은 원소들 중 가장 앞의 원소와 위치를 교체한다.

```js
// 선택 정렬 함수
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // 가장 작은 원소의 인덱스
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        // swap 
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
```
<br>

### 선택 정렬의 시간 복잡도
- 선택 정렬이란 가장 작은 것을 선택해서 앞으로 보내는 정렬 기법이다.
- 매 단계에서 가장 작은 것을 선택하는 데 약 N번의 연산이 필요하다. (선형 탐색)
- 결과적으로 약 N개의 단계를 거친다는 점에서 최악의 경우 O(N<sup>2</sup>)의 시간 복잡도를 가진다.