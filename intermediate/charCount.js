/**
 * Problem:
 * Write a function that counts the occurrences of a specific character in a given string.
 *
 * Your task:
 * Implement the function `charCount` that returns the number of times a given character appears in the string.
 *
 * Example:
 * charCount("hello", "l") should return 2.
 * charCount("world", "o") should return 1.
 */

// Write your solution here
function charCount(x,y){
    let z = []
    for(item of x){
        z.push(item === y)
    }
    let m = z.filter((item) => item == true)
    return m.length
}
module.exports = charCount;
