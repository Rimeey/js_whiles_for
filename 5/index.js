'use strict'

let nums

let dodat = 0
let videm = 0
let nulls = 0
let parni = 0
let neparni = 0

for (let i = 1; i < 11; i++) {
    nums = +prompt('Enter the number')
    if(i) {
        if (nums === 0) {
            nulls++
        } else if (nums > 0) {
            dodat++
        } else if (nums < 0) {
            videm++
        }
        if (nums % 2 == 0 || nums % -2 == 0) {
            parni++
        } else {
            neparni++
        }
    }
}

document.write(`positive numbers: ${dodat} <br> negative numbers: ${videm} <br> null numbers: ${nulls} <br> paired numbers: ${parni} <br> unpaired numbers: ${neparni}`)