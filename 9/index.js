'use strict'

let num = +prompt('Enter the number from 2 to 9');

if (num >= 2 && num <= 9) {
    for (let i = 0; i < 10; i++) {
        if (i >= 1) {
            console.log(`${num} * ${i} = ` + 2 * i)
        }
    }
}