const findDuplicates = require('../advanced/findDuplicates');

describe('findDuplicates', () => {
  it('should return duplicate elements in the array', () => {
    expect(findDuplicates([1, 2, 2, 3, 4, 4])).toEqual([2, 4]);
    expect(findDuplicates([1, 1, 1, 2, 3])).toEqual([1]);
    expect(findDuplicates([1, 2, 3])).toEqual([]);
  });
});
