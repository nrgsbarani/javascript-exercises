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
function isPrime(x){
    
    switch(true){
            
        case(x === 2 || x === 3):
            return true;
            break;

        case(x % 2 === 0 || x % (2+1) === 0 || x === 0 || x === 1):
            return false;
            break;

        default:
            return true;
    }
}
module.exports = isPrime;
