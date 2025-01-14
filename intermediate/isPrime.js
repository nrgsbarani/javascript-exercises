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
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
        for (i=2 ; i <=Math.sqrt(num) ; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
}

console.log(isPrime(53));
console.log(isPrime(78));


module.exports = isPrime;
