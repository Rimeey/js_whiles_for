'use strict'

let cikl = 0

do {
    let num1 = +prompt('Enter the first number');
    let sign = prompt('Enter the arithmetic sign: | + | - | * | / |', '+');
    let num2 = +prompt('Enter the second number');

    switch (sign) {
        case '+':
            alert('Result: ' + (num1 + num2))
        break;
    
        case '-':
            alert('Result: ' + (num1 - num2))
        break;
    
        case '*':
            alert('Result: ' + (num1 * num2))
        break;
    
        case '/':
            alert('Result: ' + (num1 / num2))
        break;
    
        default:
            alert('Result: Incorrent data');
        break;
    }

    cikl = confirm('Do you want calculate something again?')

} while (cikl == true);