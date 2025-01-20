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
function reverseString(string_input){
    let reverse=""
    let length = string_input.length;
    for(let i=length - 1 ; i >= 0 ; i--){
        reverse += string_input[i];
    }
    console.log(reverse);
    return reverse
}
module.exports = reverseString;
