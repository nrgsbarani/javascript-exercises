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

// write using reduce function
sumArray = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


// write using iterators
/*function sumArray(arr) {
    let accumulator = 0;
    for (let item of arr ) {
        accumulator += item;
    }
    return accumulator;
}*/

module.exports = sumArray;
