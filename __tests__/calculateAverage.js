const calculateAverage = require("../advanced/calculateAverage");

describe("calculateAverage", () => {
  it("should return the average of the numbers in the array", () => {
    expect(calculateAverage([1, 2, 3, 4])).toBe(2.5);
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });

  it("should handle an array with a single number", () => {
    expect(calculateAverage([42])).toBe(42);
  });

  it("should return NaN for an empty array", () => {
    expect(calculateAverage([])).toBeNaN();
  });
});
