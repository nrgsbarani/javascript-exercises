/**
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

function generateCombinations(input) {
    let output = [];
    let size = input.length;
    recursion(output , [] , input);
    //output.sort((a, b) => a.length - b.length);
    let opt = orderArraysInArray(output , size);
    return opt;
}

function recursion(output , current , remind) {
    if (remind.length === 0) {
        if (current.length > 0) {
            output.push(current);
        }
    }else {
        recursion(output , current.concat(remind.slice(0,1) ) , remind.slice(1,));
        recursion(output , current, remind.slice(1,));
    }
}

function orderArraysInArray(arrays , count) {
    let output = new Array();
    for (let indexI = 1; indexI <= count; indexI++) {
        let temp = [];
        for (let indexj = 0; indexj < arrays.length; indexj++) {
            if ( arrays[indexj].length === indexI ) {
                temp.push(arrays[indexj]);
            }
        }

        let sorted = arrayMergeSort(temp);
        output = [...output , ...sorted];
    }
    return output;
}

function sumArrays(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function arrayMergeSort(array) {
    // console.log(array);
    if (array.length === 0 || array.length === 1) return array;
    else return arrayMerge(arrayMergeSort(array.slice(0 ,array.length/2 )), arrayMergeSort(array.slice(array.length/2,)));
}

function arrayMerge(left , right) {
    let output = new Array(left.length + right.length);
    let left_index = 0;
    let right_index = 0;
    for (let i = 0; i < output.length; i++) {
        if (left_index === left.length ) {
            output[i] = right[right_index];
            right_index ++
        }else if (right_index === right.length) {
            output[i] = left[left_index];
            left_index ++
        }else {
            if (sumArrays(left[left_index]) < sumArrays(right[right_index])) {
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







module.exports = generateCombinations;
