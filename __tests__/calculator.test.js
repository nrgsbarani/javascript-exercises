const { add, subtract, multiply, divide } = require('../advanced/calculator');

describe('Calculator', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  it('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should handle division by zero', () => {
    expect(divide(10, 0)).toBeNaN();
  });
});
