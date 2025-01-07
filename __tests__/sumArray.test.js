const sumArray = require('../intermediate/sumArray');

describe('sumArray', () => {
  it('should return the sum of all elements in the array', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([0, 0, 0])).toBe(0);
    expect(sumArray([5, -5, 10])).toBe(10);
  });
});
