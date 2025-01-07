const numberToWords = require('../advanced/numberToWords');

describe('numberToWords', () => {
  it('should convert numbers to words correctly', () => {
    expect(numberToWords(123)).toBe("one hundred twenty three");
    expect(numberToWords(5)).toBe("five");
    expect(numberToWords(45)).toBe("forty five");
  });
});
