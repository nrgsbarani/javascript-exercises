/**
 * Problem:
 * Write a function that takes an array of numbers and sorts it in ascending order.
 *
 * Your task:
 * Implement the function `sortArray` that sorts the given array in ascending order.
 *
 * Example:
 * sortArray([3, 1, 4, 1, 5, 9]) should return [1, 1, 3, 4, 5, 9].
 */

// Bubble sort
function sortArray(list_of_numbers){
    len = list_of_numbers.length;
    for (i = 0 ; i < len ; i++){
        for(j = 0; j <= len -1; j++){
            if (list_of_numbers[j] > list_of_numbers[j+1]){
                var variable = list_of_numbers[j]
                list_of_numbers[j] = list_of_numbers[j+1]
                list_of_numbers[j+1] = variable
            } else {
                continue
            }
        }
    }
    console.log(len)
    return list_of_numbers
}

module.exports = sortArray;
