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
function factorial(num) {
    let a = 1;
    for (i=num; i >= 1 ; i--) {
        a = a * i;
    }
    return a;
}

console.log(factorial(5));
console.log(factorial(45));

module.exports = factorial;
