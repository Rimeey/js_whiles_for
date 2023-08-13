'use strict'

let num1 = +prompt('Enter the number');
let num2 = +prompt('Enter the number');
let nsd;

while (num1 != num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    }
    else {
      num2 = num2 - num1;
    }
  }
  nsd = num1;

alert(`greatest common divisor of two numbers: ${nsd}`);