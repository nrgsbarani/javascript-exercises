/*
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */
///version 1
function generateCombinations(nums) {
    let result = [];

    function backtrack(start, combination) {
        if (combination.length > 0) {
            result.push([...combination]);
        }
        for (let i = start; i < nums.length; i++) {
            combination.push(nums[i]);
            backtrack(i + 1, combination);
            combination.pop();
        }
    }

    backtrack(0, []);
    return result.sort((a, b) => a.length - b.length || a[0] - b[0]);
}

////version2
// function generateCombinations(nums) {
//     let result = [];

//     let totalCombinations = 1 << nums.length;

//     for (let i = 1; i < totalCombinations; i++) {
//         let combination = [];
//         for (let j = 0; j < nums.length; j++) {
//             if (i & (1 << j)) {
//                 combination.push(nums[j]);
//             }
//         }
//         result.push(combination);
//     }

//     return result.sort((a, b) => a.length - b.length || a[0] - b[0]);
// }


module.exports = generateCombinations;





