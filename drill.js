'use strict';

/*
function repeat(fn, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += fn();
    }
    return result;
}

let hello = function() {
    console.log('Hello world');
}

let goodBye = function() {
    console.log('Goodbye world');
}
repeat(hello, 5);
repeat(goodBye, 5);


function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
    // <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
*/

console.log([
    [0, 0],
    [0, 5],
    [-1, -3],
    [-3, 1],
    [2, -4],
    [3, 2]
].filter(function(arr) {
    return arr[0] >= 0 && arr[1] >= 0;
}));

console.log([
    [0, 0],
    [0, 5],
    [-1, -3],
    [-3, 1],
    [2, -4],
    [3, 2]
].map(function(arr) {
    return [arr[0] + arr[1]];
}));


let num = 0;
[
    [0, 0],
    [0, 5],
    [-1, -3],
    [-3, 1],
    [2, -4],
    [3, 2]
].forEach(function(arr) {
    num++;
    console.log(`Movement #${num}: ${arr[0] + arr[1]} steps`);
});

let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let arr = str.split(' ');

console.log(arr.reduce(function(acc, initialValue) {
    if (initialValue.length === 3) {
        acc += ' ';
    } else {
        acc += initialValue[initialValue.length - 1].toUpperCase();
    }
    return acc;
}, ''));