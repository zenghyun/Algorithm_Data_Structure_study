## 우선순위 큐(Priority Queue) 
우선순위 큐는 우선순위에 따라서 데이터를 추출하는 자료구조이다.

우선순위 큐는 일반적으로 힙(heap)을 이용해 구현한다.

| 자료구조 | 추출되는 데이터 |
| ----- | ----- | 
| <p align="center">스택(Stack)</p> | <p align="center">가장 나중에 삽입된 데이터</p> |
| <p align="center">큐(Queue)</p> | <p align="center">가장 먼저 삽입된 데이터</p> | 
| <p align="center">우선순위 큐(Priority Queue)</p> | <p align="center">가장 우선순위가 높은 데이터</p> | 


### 우선순위 큐를 구현하는 방법
- 우선순위 큐는 다양항 방법으로 구현할 수 있다.
- 데이터의 개수가 N개일 때, 구현 방식에 따른 시간 복잡도는 다음과 같다.

| 우선순위 큐 구현 방식| 삽입 시간| 삭제 시간|
| ----- | ----- | ----- | 
| <p align="center">리스트 자료형</p> | <p align="center">O(1)</p> | <p align="center">O(N)</p> |
| <p align="center">힙(Heap)</p> | <p align="center">O(logN)</p> | <p align="center">O(logN)</p> |

- 일반적인 형태의 큐는 선형적인 구조를 가진다.
- 반면에 우선순위 큐는 이진 트리(binary tree) 구조를 사용하는 것이 일반적이다. 

### 힙(Heap)
- 힙(heap)은 원소들 중에서 최댓값 혹은 최솟값을 빠르게 찾아내는 자료구조다.
- 최대 힙(max heap): 값이 큰 원소부터 추출한다.
- 최소 힙(min heap): 값이 작은 원소부터 추출한다.
- 힙은 원소의 삽입과 삭제를 위해 O(logN)의 수행 시간을 요구한다.
- 단순한 N개의 데이터를 힙에 넣었다가 모두 꺼내는 작업은 정렬과 동일하다.
- 이 경우 시간 복잡도는 O(NlogN)이다.

<br>

- 힙은 완전 이진 트리 자료구조를 따른다.
- 힙에서는 우선순위가 높은 노드가 루트(root)에 위치한다.
1. 최대 힙(max heap)
- 부모 노드의 키 값이 자식 노드의 키 값보다 항상 크다.
- 루트 노드가 가장 크며, 값이 큰 데이터가 우선순위를 가진다.
2. 최소 힙(min heap)
- 부모 노드의 키 값이 자식 노드의 키 값보다 항상 작다.
- 루트 노드가 가장 작으며, 값이 작은 데이터가 우선순위를 가진다.

### 힙에 새로운 원소가 삽입될 때
- (상향식) 부모로 거슬러 올라가며, 부모보다 자신이 더 (작거나 클) 경우에 위치를 교체한다. 
- 새로운 원소가 삽입되었을 때 O(logN)의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다. 

### 힙에 새로운 원소가 삭제될 떄 
- 원소가 제거되었을 때 O(logN)의 시간 복잡도로 힙 성질을 유지하도록 할 수 있다. 
- 원소를 제거할 때는 가장 마지막 노드(우측 하단을 기준으로)가 루트 노드의 위치에 오도록 한다.
- 이후에 루트 노드에서 하향식으로 (더 작거카 큰 자식 노드로) heapify()를 진행한다.

### 힙의 특징
- 힙의 삽입과 삭제 연산을 수행할 때를 고려해 보자.
- 직관적으로, 거슬러 갈 때마다 처리해야 하는 범위에 포함된 원소의 개수가 절반씩 줄어든다.
- 따라서 삽입과 삭제에 대한 시간 복잡도는 O(logN)이다. 

### JavaScript의 힙 라이브러리
- JavaScript는 기본적으로 우선순위 큐를 라이브러리로 제공하지 않는다.
- 최단 경로 알고리즘 등에서 힙(heap)이 필요한 경우 별도의 라이브러리를 사용해야 한다.

```js
// https://github.com/ndb796/priorityqueuejs
// index.js 소스 코드를 가져온 뒤에 다음과 같이 사용할 수 있다. 

// 최대 힙 (Max Heap) 
let pq = new PriorityQueue(function(a,b) {
    return a.cash - b.cash;
});

pq.enq({cash: 250, name: 'Doohyun Kim'});
pq.enq({cash: 300, name: 'Gildong Hong'});
pq.enq({cash: 150, name: 'Minchul Han'});

console.log(pq.size()); // 3
console.log(pq.deq()); // {cash: 300, name: 'Gildong Hong'}
console.log(pq.peek()); // {cah: 250, name: 'Doohyun Kim'}
console.log(pq.size()); // 2
```