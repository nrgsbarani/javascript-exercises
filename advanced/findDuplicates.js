/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here
const findDuplicates = arr => {
  const countMap = arr.reduce((acc, num) => (acc[num] = (acc[num] || 0) + 1, acc), {});
  return Object.keys(countMap).filter(num => countMap[num] > 1).map(Number);
};

module.exports = findDuplicates;
