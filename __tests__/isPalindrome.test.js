const isPalindrome = require('../advanced/isPalindrome');

describe('isPalindrome', () => {
  it('should return true for a palindrome number', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
  });

  it('should return false for non-palindrome numbers', () => {
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
  });

  it('should return false for single digit numbers', () => {
    expect(isPalindrome(7)).toBe(true);  // 7 is a palindrome
  });
});
