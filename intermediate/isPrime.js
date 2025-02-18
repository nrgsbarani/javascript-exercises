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
const isPrime = (n) => n < 2 || (n % 2 === 0 && n !== 2) || (n % 3  === 0 && n !== 3)  ? false
     : true 


module.exports = isPrime;
