/**
 * Problem:
 * Write a basic calculator that can perform addition, subtraction, multiplication, and division.
 *
 * Your task:
 * Implement the functions `add`, `subtract`, `multiply`, and `divide` that perform
 * the respective operations based on user input.
 *
 * Example:
 * add(2, 3) should return 5.
 * subtract(5, 2) should return 3.
 * multiply(2, 4) should return 8.
 * divide(10, 2) should return 5.
 */

// Write your solution here
function add(x,y){
    result = x + y ;
    return result;
}
function subtract(x,y){
    result = x - y;
    return result;
}
function multiply(x,y){
    result = x * y ;
    return result;
}
function divide(x,y){
    if (y == 0){
        return NaN
    } else if (y != 0) {
        result = x / y;
        return result;
    } else {
        return ""
    }
}
var result = 0;
module.exports = { add, subtract, multiply, divide }
