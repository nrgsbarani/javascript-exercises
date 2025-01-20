/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here
factorial = (input) => {
    let factor = 1
    for (let i = 1; i <= input; i++) {
        factor *= i
    }
    return factor
}

let inp = 5
let inp2= 0
let inp3 = 7

factorial(inp)
factorial(inp2)
factorial(inp3)
module.exports = factorial;
