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

function charCount(string , char) {
    let arr = string.split('');
    let count = 0;
    for (item of arr) {
        if (item === char) {
            count++;
        }
    }
    return count;
}

module.exports = charCount;
