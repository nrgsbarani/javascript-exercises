/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
const fibonacci = n => [...Array(n)].reduce((arr, _, i) => 
    arr.concat(i < 2 ? i : arr[i - 1] + arr[i - 2]), []
);

module.exports = fibonacci;
