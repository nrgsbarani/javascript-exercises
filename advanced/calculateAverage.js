/**
 * Problem:
 * Write a function that calculates the average of the numbers in an array.
 *
 * Your task:
 * Implement the function `calculateAverage` that returns the average of the numbers.
 *
 * Example:
 * calculateAverage([1, 2, 3, 4]) should return 2.5.
 * calculateAverage([10, 20, 30]) should return 20.
 */
calculateAverage = (arr = []) => arr.length === 0 ? NaN : (arr.reduce((a, b) => a + b , 0) ) / arr.length;
module.exports = calculateAverage;
