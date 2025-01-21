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

function charCount(Name,set){
    var len = Name.length;
    var count = 0;
    for (i = 0 ; i < len ; i++)
    {
        if (Name[i] === set){
            count += 1;
        } else {
            continue;
        }
    }
    return count;
}

module.exports = charCount;
