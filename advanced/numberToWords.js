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

function numberToWords(number) {
    if (number === 0) {
      return "zero";
    }
  
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];
  
    function convertLessThanThousand(num) {
      if (num === 0) {
        return "";
      } else if (num < 10) {
        return units[num];
      } else if (num < 20) {
        return teens[num - 10];
      } else if(num < 99) {
        const ten = Math.floor(num / 10);
        const unit = num % 10;
        return tens[ten] + " " + units[unit];
      }else {
        const hundreds = Math.floor(num / 100);
        const un = num % 100;
        const unit = String(un).split("").map(Number)
        if(unit[0] === 1){
            return units[hundreds] + " hundred " + teens[unit[1]]
        }else{
            return units[hundreds] + " hundred " + tens[unit[0]] + " " + units[unit[1]];
        }
      }
    }
  
    let words = "";
    let i = 0;
  
    while (number > 0) {
      const chunk = number % 1000;
      if (chunk !== 0) {
        words = convertLessThanThousand(chunk) + " " + thousands[i] + " " + words;
      }
      number = Math.floor(number / 1000);
      i++;
    }
  
    return words.trim();
  }


module.exports = numberToWords;
