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
function numberToWords(num) {
  if (num === 0) return "zero";

  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const thousands = ["", "thousand", "million", "billion", "trillion"];

  function helper(n) {
      if (n === 0) return "";
      if (n < 20) return ones[n];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
      return ones[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + helper(n % 100) : "");
  }

  let result = [];
  let i = 0;

  while (num > 0) {
      let chunk = num % 1000;
      if (chunk) {
          result.unshift(helper(chunk) + (thousands[i] ? " " + thousands[i] : ""));
      }
      num = Math.floor(num / 1000);
      i++;
  }

  return result.join(" ").trim();
}

module.exports = numberToWords;
