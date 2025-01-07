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
function fibonacciRecursive(number) {
    if(number === 0) { return 0}
    else if (number === 1) { return 1 }
    else {
        return fibonacciRecursive(number-1) + fibonacciRecursive(number-2);
    }
}
function fibonacci(number) {

    if (number === 0) { return []; }
    else if (number === 1) {return [0]}
    else if (number === 2) {return [0,1]}
    else {
        let arr = new Array(number);
        arr[0] = 0
        arr[1] = 1;
        for (let i = 2; i < arr.length; i++) {
            arr[i] = arr[i - 1] + arr[i - 2] ;
        }
        return arr;
    }
}

module.exports = fibonacci;
