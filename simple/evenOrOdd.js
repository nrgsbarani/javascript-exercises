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
function isEvenOrOdd(number) {
    if (number %2 == 0){
        console.log("Even")
        return "Even"
    }
    else if (number %2 == 1){
        console.log("Odd")
        return "Odd"
    }
    else{
        console.log("Error")
        return "Error"
    }
    return 
}
module.exports = isEvenOrOdd;
