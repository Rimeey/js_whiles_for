'use strict'

let num1 = +prompt('Enter the number: 1 to ∞');
let num2 = +prompt('Enter the number: 1 to ∞');
let sum = 0;

num1 = num1 -1 // для интуитивности вводимых чисел: 
num2 = num2 +1 // например от 1 до 5, что бы система учитывала и 1 и 5 а не только 2 3 4

if (num1 >= 0 && num2 >= 1) {
    while (num1 < num2)
{
  num1++;
  
  if(num1 < num2)
    {
      sum = sum + num1;
    }
}
}
alert(`sum of all numbers: ${sum}`);