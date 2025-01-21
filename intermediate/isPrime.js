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


function isPrime(number){
    var prime_tester = [2,3,5,7]
    var len = prime_tester.length;
    var Flag = 0
    for( i = 0 ; i < len ; i++)
    {
        if (number == prime_tester[i]){
            Flag = 1
        } else if (number % prime_tester[i] == 0){
            Flag = 0
            break
        } else if (number % prime_tester[i] != 0) {
            Flag = 1
        } else {
            console.log("Error")
            return ("Error")
        }
    }
    
    if (Flag == 1){
        console.log(number + " is Prime")
        return true
    } else if (Flag == 0) {
        console.log(number + " is not Prime")
        return false
    } else {
        console.log("Error")
        return "Error"
    }
}
module.exports = isPrime;