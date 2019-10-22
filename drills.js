'use strict';

function average(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum / numbers.length;
}

average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])