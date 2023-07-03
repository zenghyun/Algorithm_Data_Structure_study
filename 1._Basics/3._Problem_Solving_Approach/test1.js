
function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character...
    for(var i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase().trim();
        // if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
            // if the char is a number/letter AND not in object, add it to object and set value to 1
        } else {
            result[char] = 1;
        }
    }
    // if character is something else (space, period, etc.) don't do anything 
    // return object at end
    return result;
}

// Refactoring 1

function charCount(str) {
    var obj = {};
    for(var i =0; i< str.length; i ++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

console.log(charCount("Hello world!"));

// Refactoring 2

function charCount(str) {
    var obj = {};
    for(var char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount("Hello world!"));

// 정규 표현식을 안쓴 버전 

function charCount(str) {
    var obj = {};
    for(var char of str) {
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false; 
        }
        return true;            
}