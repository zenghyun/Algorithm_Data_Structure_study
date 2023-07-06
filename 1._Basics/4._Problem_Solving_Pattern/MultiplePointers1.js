/* 
Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

const averagePair= (arr, avg) => {
if(arr.length === 0) {
    return false;
}

let left = 0; 
let right = arr.length -1;

while(left < right) {
    let Avg = (arr[left] + arr[right]) / 2;
    if(Avg === avg) {
        return true;
    } else if ( Avg > avg) {
        right--;
    } else {
        left++;
    }
}
return false;
}

console.log( averagePair([1,2,3],2.5)); // true
console.log( averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log( averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log( averagePair([],4));// false