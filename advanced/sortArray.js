/**
 * Problem:
 * Write a function that takes an array of numbers and sorts it in ascending order.
 *
 * Your task:
 * Implement the function `sortArray` that sorts the given array in ascending order.
 *
 * Example:
 * sortArray([3, 1, 4, 1, 5, 9]) should return [1, 1, 3, 4, 5, 9].
 */

module.exports = sortArray;

function sortArray(arr) {
    return arr.sort((a,b) => a-b);
}

console.log(sortArray([3, 1, 4, 1, 5, 9]));