'use strict';

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