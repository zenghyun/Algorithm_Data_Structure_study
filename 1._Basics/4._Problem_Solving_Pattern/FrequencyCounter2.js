/* 
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

const areThereDuplicates = (...num) => {
    const arr = [...num];

    const lookup = {}; 

    for(let val of arr) {
        lookup[val] = (lookup[val] || 0) + 1;
    }

    for(let key in lookup) {
        if(lookup[key] > 1) {
            return true;
        } 
    }
    return false;
};

console.log( areThereDuplicates(1,2,3) );
console.log( areThereDuplicates(1,2,2) );
console.log( areThereDuplicates('a', 'b', 'c', 'a') );