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

module.exports = calculateAverage;

function calculateAverage (arr) {
    let sum = arr.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    },0);

    let length = arr.length;
    let average = sum / length;
    return average;
}

console.log(calculateAverage([1,2,3,4]));

