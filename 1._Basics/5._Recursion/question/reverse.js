/*
reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(){
  // add whatever parameters you deem necessary - good luck!
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

const reverse = (text) => {
    const arr = Array.from(text);
    if(arr.length === 0) {
        return arr;
    }
    return text[arr.length-1] + reverse(arr.slice(0, arr.length-1));
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
