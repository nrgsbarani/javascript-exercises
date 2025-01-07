const fibonacci = require('../intermediate/fibonacci');

describe('fibonacci', () => {
  it('should return the correct Fibonacci sequence up to the given number of terms', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibonacci(3)).toEqual([0, 1, 1]);
    expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
});
