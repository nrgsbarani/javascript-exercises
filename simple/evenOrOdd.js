/**
 * Problem:
 * Write a program that checks whether a given number is even or odd.
 *
 * Your task:
 * Implement the function `isEvenOrOdd` that takes a number and returns either "Even" or "Odd".
 *
 * Example:
 * isEvenOrOdd(4) should return "Even".
 * isEvenOrOdd(3) should return "Odd".
 */

// Write your solution here
isEvenOrOdd = (number) => {
    if (number % 2 == 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

let num1 = 20
let num2 = 15
isEvenOrOdd(num1)
isEvenOrOdd(num2)

module.exports = isEvenOrOdd;
