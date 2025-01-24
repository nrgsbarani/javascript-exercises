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

function fibonacci(num){
    let x = [0,1]
    for (let i = 2 ; i < num ; i++){
        
        x.push(x[i-2]+x[i-1])

    }
  return x
}
module.exports = fibonacci;
