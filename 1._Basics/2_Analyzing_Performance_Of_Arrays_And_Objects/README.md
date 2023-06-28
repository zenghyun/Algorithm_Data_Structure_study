## Objectives

- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly

**객체는 배열모다 모든 것이 더 빠르지만 정렬되어 있지 않다.**
<br>

 ## Big O of Object Methods 
 - Object.keys - O(N)
 - Object.values - O(N)
 - Object.entries - O(N)
 - hasOwnProperty - O(1)

<br>

## When to use Arrays 
- When you need order  
- When you need fast access / insertion and removal (sort of....)

**배열은 정렬되어 있지만, 끝에 추가하고 제거하는 작업이 시작에 추가하고 제거하는 작업보다 훨씬 빠르다.**
<br>

## Big O of Arrays
- Insertion - It depends...
- Removal - It depends...
- Searching - O(N)
- Access - O(1)
- push - O(1)
- pop - O(1)
- shift - O(N)
- unShift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N*logN) **여기서 제일 느리다.**
- forEach/map/filter/reduce/etc. - O(N)
  
