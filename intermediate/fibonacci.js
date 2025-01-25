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
fibonacci = (counter) => {
    let fibonacci_array = [0, 1];
    for (let i = 2; i < counter; i++) {
        fibonacci_array[i] = fibonacci_array[i - 1] + fibonacci_array[i - 2];
    }
    return fibonacci_array;

}

module.exports = fibonacci;
