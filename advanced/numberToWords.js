/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here

function numberToWords(input){
    const Numbers = new Map([
        [0 , "zero"],
        [1 , "one"],
        [2 , "two"],
        [3 , "three"],
        [4 , "four"],
        [5 , "five"],
        [6 ,"six"],
        [7 ,"seven"],
        [8 ,"eight"],
        [9 ,"nine"],
        [10 , "ten"],
        [11 , "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "eleventeen"],
    ])
    let array = new String( input + "").split("").map(Number);
    for

}

module.exports = numberToWords;


