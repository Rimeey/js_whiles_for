'use strict'

let num = +prompt('Enter the number from 2 to 9');

if (num >= 2 && num <= 9) {
    for (let i = 1; i < 11; i++) {
            console.log(`${num} * ${i} = ` + num * i)
    }
}