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
const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function numberToWords(num) {
    if (num === 0) return "zero";
    return convert(num).trim();
}

function convert(num) {
    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "");
    if (num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 !== 0 ? " " + convert(num % 100) : "");
    if (num < 1000000) return convert(Math.floor(num / 1000)) + " thousand" + (num % 1000 !== 0 ? " " + convert(num % 1000) : "");
    if (num < 1000000000) return convert(Math.floor(num / 1000000)) + " million" + (num % 1000000 !== 0 ? " " + convert(num % 1000000) : "");
    return convert(Math.floor(num / 1000000000)) + " billion" + (num % 1000000000 !== 0 ? " " + convert(num % 1000000000) : "");
}

module.exports = numberToWords;

module.exports = numberToWords;
