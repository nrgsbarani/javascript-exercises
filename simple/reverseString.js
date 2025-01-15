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

function reverseString(x){

    let reverser = Array.from(x)

    let reversed = reverser.reverse()

    let string = reversed.join("")

    return string
}

module.exports = reverseString;
