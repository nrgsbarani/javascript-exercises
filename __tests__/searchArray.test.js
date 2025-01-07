const searchArray = require("../advanced/searchArray");

describe("searchArray", () => {
  it("should return true if the target is in the array", () => {
    expect(searchArray([1, 2, 3, 4], 3)).toBe(true);
    expect(searchArray([5, 10, 15], 10)).toBe(true);
  });

  it("should return false if the target is not in the array", () => {
    expect(searchArray([1, 2, 3, 4], 5)).toBe(false);
    expect(searchArray([7, 8, 9], 10)).toBe(false);
  });

  it("should handle empty arrays", () => {
    expect(searchArray([], 3)).toBe(false);
  });
});
