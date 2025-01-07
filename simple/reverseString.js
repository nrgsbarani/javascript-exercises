/**
 * Problem:
 * Write a program that takes a string as input and returns the string reversed.
 *
 * Your task:
 * Implement the function `reverseString` that returns the reversed string of the input.
 *
 * Example:
 * reverseString("hello") should return "olleh".
 * reverseString("world") should return "dlrow".
 */



// Write your solution here

// implement in legecy mode without using built-in array methods

function reverseString(inputString) {
    let arr = inputString.split('');
    let output = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i];
    }
    return output;
}

// using array built-in methods
//reverseString = (str) => str.split('').reverse().join('');

// using rest
//reverseString = (str) => [...str].reverse().join('');


//reverseString = (str) => undefined


module.exports = reverseString;
