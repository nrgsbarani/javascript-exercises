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
//sortArray = (array) => array.sort();
// solve this problem with merge sort algorithm

function mergeSort(array) {
    if (array.length === 0 || array.length === 1) return array;
    else return merge(mergeSort(array.slice(0 ,array.length/2 )), mergeSort(array.slice(array.length/2,)));
}

function merge(left , right ) {

    let output = new Array(left.length + right.length);
    //let output_index = 0;
    let left_index = 0;
    let right_index = 0;
    for (let i = 0; i < output.length; i++) {
        if (left_index === left.length ) {
            output[i] = right[right_index];
            right_index ++
        }else if (right_index === right.length ) {
            output[i] = left[left_index];
            left_index ++
        }else {
            if( left[left_index] < right[right_index] ) {
                output[i] = left[left_index];
                left_index ++
            }else {
                output[i] = right[right_index];
                right_index ++
            }
        }
    }

    return output;
}

sortArray = (array) => mergeSort(array);

module.exports = sortArray;
