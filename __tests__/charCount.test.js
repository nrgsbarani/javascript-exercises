const charCount = require('../intermediate/charCount');

describe('charCount', () => {
  it('should return the number of occurrences of a character in the string', () => {
    expect(charCount("hello", "l")).toBe(2);
    expect(charCount("world", "o")).toBe(1);
    expect(charCount("abcd", "z")).toBe(0);
  });
});
