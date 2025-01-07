const reverseString = require('../simple/reverseString');

describe('reverseString', () => {
  it('should return the reversed string', () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("abc")).toBe("cba");
  });
});
