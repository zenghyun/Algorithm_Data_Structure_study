/*

isPalindrome
문자열이 전달되면 true를 반환하는 isPalindrome이라는 재귀 함수를 작성하십시오.
그것은 회문입니다 (앞과 뒤로 동일하게 읽음). 그렇지 않으면 false를 반환합니다.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(){
  // add whatever parameters you deem necessary - good luck!
}

*/

const isPalindrome = (text) => {
    if(text.length === 1) return true;
    if(text.length === 2) return text[0] === text[1];
    if(text[0] === text.slice(-1)) return isPalindrome(text.slice(1,-1));
    return false;
};

console.log( isPalindrome('awesome') ); // false
console.log( isPalindrome('foobar') ); // false
console.log( isPalindrome('tacocat') ); // true
console.log( isPalindrome('amanaplanacanalpanama') ); // true
console.log( isPalindrome('amanaplanacanalpandemonium') ); // false