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
sumArray = (num_array) => {
    return result = num_array.reduce((item , current) => {
        return item + current
    }, 0)
}

let array1 = [1, 2, 3]
let array2 = [0, 0, 0]
let array3 = [1, -1, 1]

sumArray(array1)
sumArray(array2)
sumArray(array3)
module.exports = sumArray;
