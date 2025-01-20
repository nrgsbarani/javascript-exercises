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
    if (num === 0) return "zero"
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    
    let words = ""
  
    if (num >= 100) {
      words += ones[Math.floor(num / 100)] + " hundred"
      num %= 100
      if (num > 0) words += " "
    }
  
    if (num >= 20) {
      words += tens[Math.floor(num / 10)]
      num %= 10
      if (num > 0) words += " " + ones[num]
    } else if (num > 0) {
      words += ones[num]
    }
  
    return words;
}

module.exports = numberToWords;
