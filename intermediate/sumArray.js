/**
 * Problem:
 * Write a function that takes an array of numbers as input and returns the sum of the numbers in the array.
 *
 * Your task:
 * Implement the function `sumArray` that calculates the sum of all elements in the given array.
 *
 * Example:
 * sumArray([1, 2, 3]) should return 6.
 * sumArray([0, 0, 0]) should return 0.
 */

// Write your solution here

function sumArray(number){

    var set = number.length;
    var result = 0

    for (i = 0 ; i < set ; i++){
        result += number[i]
    }
    
    console.log("Sum is " + result)
    return result
}

module.exports = sumArray;
