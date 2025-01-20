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
    let pre = 0, next = 1;
    let fibonacci_array = [0]
    for (let i = 1; i < counter; i++) {
        let keep = pre + next
        pre = next
        next = keep
        fibonacci_array[i] = pre
    }
    return fibonacci_array
}

let fibo1 = 5
let fibo2 = 3

fibonacci(fibo1)
fibonacci(fibo2)
module.exports = fibonacci;
