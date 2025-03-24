"use strict";

function greet(name) {
    return `Hello "${name}"`;
}
const message = greet("John");
console.log(message);

const numbers = [1, 23, 5, 11, 19, 77];

function checkNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}
checkNumbers(numbers);
