const isEvenOrOdd = require('../simple/evenOrOdd');

describe('isEvenOrOdd', () => {
  it('should return "Even" for even numbers', () => {
    expect(isEvenOrOdd(4)).toBe('Even');
    expect(isEvenOrOdd(0)).toBe('Even');
  });

  it('should return "Odd" for odd numbers', () => {
    expect(isEvenOrOdd(3)).toBe('Odd');
    expect(isEvenOrOdd(1)).toBe('Odd');
  });
});
