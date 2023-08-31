## 단일 연결 리스트 (Singly Linked Lists)

### Objectives 
- 단일 연결 목록이 무엇인지 정의
- 연결 목록을 배열과 비교 및 ​​대조
- 단일 연결 목록에 삽입, 제거 및 순회 방법 구현

### What is a linked list?
- 머리, 꼬리, 길이 속성을 포함하는 데이터 구조입니다.
- Linked List는 노드로 구성되며 각 노드에는 값과 다른 노드에 대한 포인터 또는 null이 있습니다.

### Comparisons with Arrays
#### Lists
- 인덱스가 없습니다!
- 다음 포인터가 있는 노드를 통해 연결됨
- 무작위 접근은 허용되지 않습니다.

#### Arrays
- 순서대로 색인이 되어있습니다!
- 삽입과 삭제에는 비용이 많이 들 수 있습니다.
- 특정 인덱스에서 빠르게 접근 가능

## Pushing
- 연결리스트 끝에 새 노드 추가

### Pushing pseudocode
- 이 함수는 값을 받아들여야 합니다.
- 함수에 전달된 값을 사용하여 새 노드를 만듭니다.
- 목록에 head 속성이 없으면 head와 tail을 새로 생성된 노드로 설정합니다.
- 그렇지 않으면 꼬리의 다음 속성을 새 노드로 설정하고 목록의 꼬리 속성을 새로 생성된 노드로 설정합니다.
- 길이를 1씩 증가시킵니다.

```js
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
```

## Popping 
- Linked List의 끝에서 노드를 제거합니다!

### Popping pseudocode
- 목록에 노드가 없으면 정의되지 않음을 반환합니다.
- 꼬리에 도달할 때까지 목록을 반복합니다.
- 두 번째에서 마지막 노드의 다음 속성을 null로 설정합니다.
- 꼬리를 마지막 노드에서 두 번째로 설정합니다.
- 목록의 길이를 1씩 줄입니다.
- 제거된 노드의 값을 반환

```js
  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current; 
    while(current.next) {
        newTail = current;
        current = current.next; 
    }
    this.tail = newTail; 
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
        this.head = null;
        this.length = null;
    }
    return current;
}
```

## Shifting 
- Linked List의 시작 부분에서 새 노드를 제거합니다!

### Shifting pseudocode
- 노드가 없으면 undefined를 반환합니다.
- 현재 헤드 속성을 변수에 저장합니다.
- head 속성을 현재 head의 다음 속성으로 설정
- 길이를 1씩 감소시킵니다.
- 제거된 노드의 값을 반환

```js
 shift() {
    if(!this.head) return undefined; 
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
        this.tail = null;
    }
    return currentHead;
  }
```