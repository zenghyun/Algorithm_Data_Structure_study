// 1
const capitalizeFirst = (arr) => {
    let results = [];
    let i = 0;
    while(i < arr.length) {
        let UpperCaseText = arr[i][0].toUpperCase() + arr[i].slice(1);
        results.push(UpperCaseText);
        i ++;
    }
    return results;
}
console.log(capitalizeFirst(['car', 'taco', 'banana']));

// 2
const capitalizeFirst2 = (arr) => {
    return arr.map(x => {
        let UpperCaseText = x[0].toUpperCase() + x.slice(1);  
        return UpperCaseText;
    });
};
console.log(capitalizeFirst2(["car", "taco", "banana"]));

// 3
function capitalizeFirst3 (array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst3(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}

console.log(capitalizeFirst3(["car", "taco", "banana"]));
