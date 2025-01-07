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


function isPrime(number ) {
    if (number < 2 ) { return false }
    let max = Math.floor(number ** 0.5) + 1 ;
    for (let i = 2; i <= max; i++) {
        if (number % i === 0  ) {return false;}
    }
    return true;
}

console.log(isPrime(51));