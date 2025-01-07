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

function factorialRecursive(number) {
    if (number < 0) return NaN;
    if (number === 0) return 1;
    if (number === 1) return 1;
    else return number * factorialRecursive(number - 1);
}

factorial = (number) => factorialRecursive(number);

module.exports = factorial;
