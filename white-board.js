/*
function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseString1(str) {
    return [...str].reverse().join('');
}

function reverseStr(inputString) {
    let arr = inputString.split('');
    let output = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i];
    }
    return output;
}

console.log(reverseString1("hello World"));
console.log(reverseStr("hello World"));
*/
/*

isEvenOrOdd = (number) => number%2 === 0 ? "Even"  : "Odd"

console.log(isEvenOrOdd(5))
*/
/*

celsiusToFahrenheit = (degree) => (degree * (9 / 5)) + 32;

console.log(celsiusToFahrenheit(100));*/


/*
function isPrime(number ) {
    if (number < 2 ) { return false }
    let max = Math.floor(number ** 0.5) + 1 ;
    for (let i = 2; i <= max; i++) {
        if (number % i === 0  ) {return false;}
    }
    return true;
}

console.log(isPrime(51));*/


/*
function factorialRecursive(number) {
    if (number < 0) return NaN;
    if (number === 0) return 1;
    if (number === 1) return 1;
    else return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(5));*/

/*function charCount(string , char) {
    //let arr = ;
    //return string.split('').reduce((accumulator, currentValue) => (currentValue === char) ? accumulator ++ : accumulator , 0);
    let arr = string.split('');
    let count = 0;
    for (item of arr) {
        if (item === char) {
            count++;
        }
    }
    return count;
}*/


/*
console.log(charCount("hello World" , "l"));
*/
/*

// array = [3, 1, 4, 1, 5, 9]
let array = [3, 1, 4, 1, 5]

array2 = [10, -1, 2, 0, 3]
sortArray = (array) => array.sort();

function mergeSort(array) {
    //console.log(array)
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
    //console.log(output);
    return output;
}
//(5/2)
//console.log(array.slice(0,2));
//console.log(array.slice(2,));
//mergeSort(array)

merge([1,3,5] , [1,2,6])
console.log(mergeSort(array2));
*/

/*
sumOfDigits(12335)

function sumOfDigits(n) {
    let array = new String(n + "").split("").map(Number);
    console.log(array);
}*/

/*

let userList = new Set([]);

addUser = (user) => userList.has(user) ? false : userList.add(user) ;
showUsers = () => Array.from(userList);
removeUser = (user) => userList.delete(user);

addUser("Amir")
addUser("hesam")
removeUser("forghan")
removeUser("Amir")

console.log( showUsers() );
*/

/*
isPalindrome = (number) => number < 0 ? false : prepare2palindrome( number );

function prepare2palindrome(number) {
    let array = new String( number + "").split("").map(Number);
    return palindromeRecursive(array , 0 ,array.length - 1);
}

function palindromeRecursive(array , start , end) {
    console.log(array,start , end);
    if(start >= end ) return true;
    else if(array[start] === array[end]) return palindromeRecursive(array, start+1 ,end-1) ;
    else return false;
}

console.log(isPalindrome(12321));*/
// async function getClock() {
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     return hour + ":" + minute + ":" + second;
// }
/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM("<!DOCTYPE html><head></head><body><div id=\"clock\"></div></body></html>");


function digitalClock(){

    //document.body.innerHTML = '<div id="clock"></div>';
    const clockElement = dom.window.document.getElementById("clock");

    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        console.clear()
        console.log(hour + ":" + minute + ":" + second);
        clockElement.textContent = `${hour}:${minute}:${second}`;
        //process.stdout.write(hour + ":" + minute + ":" + second);
    }, 500);
}

digitalClock()*/

/*
function findDuplicates(input) {
    let output = [];
    let lastelement = NaN;
    let exists = false;
    //console.log(input)
    for(let item of input) {
        //console.log(item);
        if (item === lastelement) {
            if (exists === true) {
                // do nothing
            } else {
                output.push(item);
                exists = true;
            }
        } else {
            exists = false;
        }
        lastelement = item
    }

    return output;
}

console.log(findDuplicates([1, 2, 2, 3, 4, 4]));*/

/*
[1,2,3,4,5]
k = 1 ==> [1] , [2] , [3] , [4] , [5]
k = 2 ==> [1,2] , [1,3] , [1,4] , [1,5] , [2,3] , [2,4] , [2,5] , [3,4] , [3,5] , [4,5]
k = 3 ==> [1,2,3] , [1,2,4] , [1,2,5] , [2,3,4] , [2,3,5] , [3,4,5]
k = 4 ==> [1,2,3,4] , [1,3,4,5] , [1,2,4,5] , [1,2,3,5] , [2,3,4,5]
k = 5 ==> [1,2,3,4,5]

 */
//
// function generateCombinatonFromN(array , num) {
//     let outputall = [];
//     if ( num > array.length || array.length === 0  || num <= 0 || num == NaN) {
//         return [];
//     }
//     if (num === array.length) {
//         return array;
//     }
//     for (let i = 0; i < array.length; i++) {
//         let ini = []
//
//         ini.push(array[i]);
//         for (let j = i+1 ; j < num; j++) {
//
//         }
//
//         outputall.push(ini)
//     }
//
//     console.log(outputall);
//
// }
//
// function addotherElements(){
//
// }
//
//
// function generateCombinations(input){
//     let output = []
//     for (let i = 1; i < input.length; i++) {
//         output.push( generateCombinationsToN(input , input.length) )
//     }
//
//     return output;
// }
//
// function generateCombinationsToN(input , num){
//     return [];
// }
//
//
// console.log(generateCombinations([1,2,3]));


function numberToWords(input){
    const Numbers = new Map([
        [0 , "zero"],
        [1 , "one"],
        [2 , "two"],
        [3 , "three"],
        [4 , "four"],
        [5 , "five"],
        [6 ,"six"],
        [7 ,"seven"],
        [8 ,"eight"],
        [9 ,"nine"],
        [10 , "ten"],
        [11 , "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "fifteen"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [30 ,"thirty"],
        [40 ,"forty"],
        [50 ,"fifty"],
        [60, "sixty"],
        [70, "seventy"],
        [80, "eighty"],
        [90, "ninety"],
    ])
    let digits = new String( input + "").split("").map(Number);
    console.log(digits);
    let words = "";
    for (let i = 0; i < digits.length; i++) {
        let stage = digits.length - i;
        let digit = digits[i];
        let step = "";
        if ( stage === 4 ) {
            step += Numbers.get(digit) + " " + "thousand ";
        }else if ( stage === 3 ) {
            step += Numbers.get(digit) + " " + "hundred ";
        }else if ( stage === 2 ) {

            if (digit === 1) {
                digit = digit * 10 + digits[i + 1];
                digits[i + 1] = 0;
                step += Numbers.get(digit);
            }else {
                digit = digit * 10;
                step += Numbers.get(digit);
            }

        }else if ( stage === 1 ) {
            if ( digit === 0 ) {
                continue;
            } else {
                step += " " + Numbers.get(digit);
            }
        }

        words += step;
    }

    console.log(words);
    return words.trim();
}

console.log(numberToWords(20))
