/**
 * Problem:
 * Write a function that checks whether a given number is a palindrome. A palindrome number is one that reads
 * the same backward as forward.
 *
 * Your task:
 * Implement the function `isPalindrome` that checks whether the number is a palindrome.
 *
 * Example:
 * isPalindrome(121) should return true.
 * isPalindrome(-121) should return false (negative numbers are not palindromes).
 * isPalindrome(10) should return false.
 */
isPalindrome = (num) => {
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
      return false
    }
  
    let reversed = 0
    let original = num
  
    while (num > 0) {
      let digit = num % 10
      reversed = reversed * 10 + digit
      num = Math.floor(num / 10)
    }
  
    return original === reversed
}

module.exports = isPalindrome;
