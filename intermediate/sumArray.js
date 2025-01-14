/**
 * Problem:
 * Write a function that takes an array of numbers as input and returns the sum of the numbers in the array.
 *
 * Your task:
 * Implement the function `sumArray` that calculates the sum of all elements in the given array.
 *
 * Example:
 * sumArray([1, 2, 3]) should return 6.
 * sumArray([0, 0, 0]) should return 0.
 */

// Write your solution here
function sumArray(arrey) {
    let sum = 0;
    // اول یه متغیر خالی میسازم که بخوام عددها رو بندازم داخلش
    for (let i=0 ; i<arrey.length ; i++) {
        // یه حلقه درست میکنم که اولین عنصر رو بگیره و بندازه توی متغیر sum  و تا زمانی که تمام عناصر رو نندازه تموم نشه
        sum = sum +arrey[i];
        // هر عنصری که میاد بیاد با مقدار قبلی که توی sum بوده جمع بشه
    }
    return sum;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([45,50,46]));


module.exports = sumArray;
