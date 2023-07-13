/*
    linear array
*/

const linearSearch= (arr, num) => {
    for(let i in arr) {
        console.log(i);
        if(arr[i] === num) return i;
    }
    return -1;
};

console.log( linearSearch([10, 15, 20, 25, 30], 15)); // should be 1.'.
console.log( linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); //should be 5.'.
console.log( linearSearch([100], 100)); // should be 0.'