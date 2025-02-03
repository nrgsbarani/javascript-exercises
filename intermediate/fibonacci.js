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

module.exports = fibonacci;

function fibonacci(n) {
    let fib = [];
    if ( n === 1) {
        return [0];

    } else if ( n === 2 ) {
        return [0,1];
    } else {
        fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i-1] + fib[i-2]);
        }
    }
    return fib;
    }

    console.log(fibonacci(5));