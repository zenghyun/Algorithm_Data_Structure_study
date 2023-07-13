# Searching Algorithms 

## Objectives 
- 검색 알고리즘이 무엇인지 설명
- 배열에서 선형 검색 구현
- 정렬된 배열에서 이진 검색 구현
- Naive String 검색 알고리즘 구현
- KMP String 검색 알고리즘 구현

<br>

## How do we search? 
배열이 주어지면 값을 검색하는 가장 간단한 방법은 배열의 모든 요소를 ​​살펴보고 원하는 값인지 확인하는 것입니다.

<br>

## JavaScript has search! 
Therer are many different search methods on arrays in JavaScript :

- indexOf
- includes
- find
- findIndex

But how do these functions work? 

<br>

## Linear Search 
첫 부분에서 시작해서 끝 부분으로 이동하면서 한 번에 하나의 항목을 확인할 수도 있고, 끝 부분에서 시작해서 첫 부분으로 이동할 수도 있다. 

중요한 것은 세트 간격으로 이동하면서 한 번에 하나의 항목을 확인하는 식으로 모든 항목을 확인한다는 것이다.

<br>

## Linear Search Pseudocode(의사 코드)
- This function accepts an array and a value 
- Loop through the array and check if the current array element is equal to the value 
- If it is, return the index at which the element is found 
- If the value is never found, return -1 

<br>

```js
/*

Linear Search Exercise
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

Examples:

linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1

*/

// my solution O(N)

const linearSearch= (arr, num) => {
    for(let i in arr) {
        if(arr[i] === num) return i;
    }
    return -1;
};

```

<br>

## Linear Search BIG O
### Best => O(1)
### Average => O(n)
### Worst => O(n)

<br>

## Binary Search (이진 검색)
Binary search is a much faster form of search 

Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time 
  

이진 검색에서는 확인을 할 때마다 남은 항목의 절반을 없앨 수 있습니다. 그러나 주의해야 할 점이 있는데 

이진 검색은 분류된 배열을 대상으로만 작동하므로 데이터가 분류되어 있어야 합니다. 

숫자를 가장 작은수 - 가장 큰 수나 가장 큰 수 - 가장 작은 수 순서로 분류하고, 문자열을 알파벳 순서대로 분류를 하는 등의 순서가 있어야 합니다. 

중간점을 찾아 내가 찾고 싶은 값이 중간점 보다 큰지 작은지 여부를 나누어 계속 범위를 줄입니다.  

<br>

### Divide and Conquer
기본적인 개념은 분할 정복입니다. 배열을 두 부분으로 나누고 중간에 있는 중간점을 선택하고, 우리가 찾는 값이 
중간점을 기준으로  좌측 절반과 우측 절반 중 어느 쪽에 있을지 확인합니다. 

<br>

## Binary Search Pseudocode 
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer 
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up 
  - If the value is too large, move the right pointer down
- If you never find the value return -1 

<br>

```js
/*
Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/

const binarySearch = (arr, val) => {
let start = 0;
let end = arr.length - 1;
let middle = Math.floor((start + end) / 2);

while ( arr[middle] !== val && start <= end ) {
    if( arr[middle] > val) {
        end = middle -1;
    } else {
        start = middle + 1;
    }
    middle =  Math.floor((start + end) / 2);
}
return arr[middle] === val ? middle : -1;
};
```

<br>

## Binary Search BIG O
### Worst and Average Case => O(log n)
### Best Case => O(1)

<br>

## Naive String Search 
Naive String Search는 긴 문자열에서 부분 문자열(subString)을 검색하는 것과 관련됩니다. 

- 더 작은 문자열이 더 긴 문자열에 나타나는 횟수를 세고 싶다고 가정합니다.
- 간단한 접근 방식은 문자 쌍을 개별적으로 확인하는 것입니다.

<br>

## Naive String Search Pseudocode
- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going 
- If you complete the inner loop and find a match, increment the count of matches
- Return the count 

