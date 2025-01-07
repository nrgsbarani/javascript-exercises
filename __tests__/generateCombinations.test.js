const generateCombinations = require('../advanced/generateCombinations');

describe('generateCombinations', () => {
  it('should return all combinations of the given array', () => {
    expect(generateCombinations([1, 2, 3])).toEqual([[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
  });

  it('should handle an empty array', () => {
    expect(generateCombinations([])).toEqual([]);
  });

  it('should handle arrays with one element', () => {
    expect(generateCombinations([42])).toEqual([[42]]);
  });
});
