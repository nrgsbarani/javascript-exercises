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
function charCount(w,l) {
    let a = 0;
    for (i=0; i <= w.length; i++) {
        if (w[i] == l) {
            a =a + 1;
        }
    }
    return a;
}
console.log(charCount("hello" , "l"));



module.exports = charCount;
