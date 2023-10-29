## 스택(stack) Last In First Out
스택: 먼저 들어온 데이터가 나중에 나가는 자료구조

흔히 박스가 쌓인 형태를 스택(stack)이라고 한다. 

우리가 박스를 쌓은 뒤에 꺼낼 때는, 가장 마지막에 올렸던 박스부터 꺼내야 한다.

즉, 새로운 원소를 삭제할 때는 마지막 원소가 삭제된다.

### 스택은 여러 가지 연산을 제공한다. 

```
연산                시간 복잡도         설명
삽입(Push)           O(1)        스택에 원소를 삽입하는 연산 
추출(Pop)            O(1)        스택에 원소를 추출하는 연산 
최상위 원소(Top)       O(1)        스택의 최상위 원소(마지막에 들어온 원소)를 확인하는 연산 
Empty               O(1)        스택이 비어 있는지 확인하는 연산  
```

### 연결 리스트로 스택 구현하기
- 스택을 연결 리스트로 구현하면, 삽입과 삭제에 있어서 O(1)을 보장할 수 있다.
- 연결 리스트로 구현할 때는 머리(head)를 가리키는 한개의 포인터만 가진다.
- 머리(head): 남아있는 원소 중 가장 마지막에 들어 온 데이터를 가리키는 포인터 

```js
let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();
console.log(stack);
let reversed = stack.reverse();
console.log(reversed);
```
  
