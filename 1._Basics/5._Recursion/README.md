## Recursion 

### Objectives 
- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- User helper method recursion and pure recursion to solve more difficult problems

<br>

### What is recursion?
A process ( a function in our case ) that calls itself

재귀는 자기 자신을 호출하는 절차이다.

<br>

### It's EVERYWHERE! 
- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms 
- Object traversal
- We will see it with more complex data structures 
- It's sometimes a cleaner alternative to iteration 

<br>

### The call stack
- It's a stack data structure - we'll talk about that later! 
- 함수가 호출될 때마다 호출 스택의 맨 위에 배치(푸시)됩니다.
- JavaScript가 반환 키워드를 보거나 함수가 종료되면 컴파일러는 제거(팝)합니다.

<br>

### Where things go wrong
- No base case
- Forgetting to return or returning the wrong thing!
- Stack overflow!

<br>

### Pure Recursion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator