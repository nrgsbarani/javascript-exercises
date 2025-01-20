/**
 * Problem:
 * Write a function that converts a temperature from Celsius to Fahrenheit.
 *
 * Your task:
 * Implement the function `celsiusToFahrenheit` that converts a given temperature in Celsius to Fahrenheit.
 *
 * Example:
 * celsiusToFahrenheit(0) should return 32.
 * celsiusToFahrenheit(100) should return 212.
 */

// Write your solution here
celsiusToFahrenheit = (celsius) => { return (celsius * 9/5) + 32 }

let C1 = 0
let C2 = 100
let C3 = 25
celsiusToFahrenheit(C1)
celsiusToFahrenheit(C2)
celsiusToFahrenheit(C3)

module.exports = celsiusToFahrenheit;
