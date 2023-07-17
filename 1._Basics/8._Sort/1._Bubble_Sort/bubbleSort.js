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

console.log( bubbleSort1([8, 1, 2, 3, 4, 5, 6, 7]) );
// console.log( bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7]) );
// console.log( bubbleSort3([8, 1, 2, 3, 4, 5, 6, 7]) );