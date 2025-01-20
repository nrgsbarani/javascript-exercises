/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here
isPrime = (number) => {
    let counter = 0
    if (number < 2) {
        return false
    }
    for (let i = 2; i <= number; i++){
        if (number % i == 0) {
            counter++;
        }
    }

    if (counter > 1) {
        return false
    }
    return true
}

let num1 = 2
let num2 = 4
let num3 = 5

isPrime(num1)
isPrime(num2)
isPrime(num3)
module.exports = isPrime;
