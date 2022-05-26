const prompt = require('prompt-sync')({sigint: true});

let riggedNum = Number(prompt("Enter your number for a 6-sided die (1-6): "))
let originalDie = Math.ceil(Math.random()*7) // 1-7

if(originalDie === 7){ // essentially making 7 the rigged number, giving it a 2/7 chance
    console.log(riggedNum)
} else {
    console.log(originalDie)
}
