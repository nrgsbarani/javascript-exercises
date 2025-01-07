const sortArray = require('../advanced/sortArray');

describe('sortArray', () => {
  it('should sort the array in ascending order', () => {
    expect(sortArray([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
    expect(sortArray([10, -1, 2, 0, 3])).toEqual([-1, 0, 2, 3, 10]);
  });

  it('should return an empty array for an empty input', () => {
    expect(sortArray([])).toEqual([]);
  });

  it('should handle an array with one element', () => {
    expect(sortArray([42])).toEqual([42]);
  });
});
