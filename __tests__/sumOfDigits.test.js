const sumOfDigits = require('../advanced/sumOfDigits');

describe('sumOfDigits', () => {
  it('should return the sum of the digits of the number', () => {
    expect(sumOfDigits(123)).toBe(6);
    expect(sumOfDigits(987)).toBe(24);
  });

  it('should return 0 for a single-digit number', () => {
    expect(sumOfDigits(7)).toBe(7);
  });

  it('should handle very large numbers', () => {
    expect(sumOfDigits(123456789)).toBe(45);
  });
});
