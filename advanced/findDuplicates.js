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
findDuplicates = (arr) => {
    let countMap = {} // An object containing a key is the content of the array and a value is the number of element
    let duplicates = [] // A list containing the keys in object that duplicated
  
    for (let num of arr) {
      countMap[num] = (countMap[num] || 0) + 1
    }
  
    for (let num in countMap) {
      if (countMap[num] > 1) {
        duplicates.push(Number(num))
      }
    }
  
    return duplicates;
}

module.exports = findDuplicates;
