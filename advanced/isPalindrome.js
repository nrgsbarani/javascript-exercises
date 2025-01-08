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

isPalindrome = (number) => number < 0 ? false : prepare2palindrome( number );

function prepare2palindrome(number) {
    let array = new String( number + "").split("").map(Number);
    return palindromeRecursive(array , 0 ,array.length - 1);
}

function palindromeRecursive(array , start , end) {
    if(start >= end ) return true;
    else if(array[start] === array[end]) return palindromeRecursive(array, start+1 ,end-1) ;
    else return false;
}

module.exports = isPalindrome;
