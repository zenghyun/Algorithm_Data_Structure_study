# Bubble Sort 

버블 정렬은 잘 사용되지 않고 엄청 효율적이지는 않다. 하지만 어떻게 사용하는 지 알면 재미있는 정렬 방식이다.

버블 정렬의 개념은 배열을 가장 작은 숫자에서 가장 큰 숫자순으로, 즉 오름차순으로 정렬 한다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동을 한다는 것이다. 

### BubbleSort Pseudocode 
- Start looping from with a variable called i the end of the array towards the beginning 
- Start an inner loop with a variable called j from the beginning until i-1 
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array

```js
// O(N^2)
const bubbleSort1 = (arr) => {
    for(let i = arr.length;  i > 0; i--) {
        for(let j = 0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

// ES 2015 ver O(N^2)
const bubbleSort2 = (arr) => {
    for(let i = arr.length;  i > 0; i--) {
        for(let j = 0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
           [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
};


// 최적화 ver  O(N2)
const bubbleSort3 = (arr) => {
    let noSwap;
    for(let i = arr.length;  i > 0; i--) {
        noSwap = true;
        for(let j = 0; j < i-1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
};
```