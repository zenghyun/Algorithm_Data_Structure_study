/* 
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/
const sameFrequency = (num1, num2) => {

    const index = {};
    const stringNum1 = String(num1);
    const stringNum2 = String(num2);

    if(stringNum1.length !== stringNum2.length) {
        return false;
    }

    for(let i = 0; i< stringNum1.length; i++) {
        let letter = stringNum1[i];
        index[letter] ? index[letter] += 1 : index[letter] = 1;
    }

    for (let i = 0; i< stringNum2.length; i++) {
        let letter = stringNum2[i];
        if(!index[letter]) {
            return false;
        } 
    }
return true;
    
};


console.log( sameFrequency(182,281)); // true
console.log( sameFrequency(34,14) );// false
console.log( sameFrequency(3589578, 5879385)); // true
console.log( sameFrequency(22,222) );// false