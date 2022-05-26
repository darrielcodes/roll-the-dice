const prompt = require('prompt-sync')({sigint: true});

let diceRoll = Number(prompt("How many sides should the dice have?: "))

console.log("A dice with " + diceRoll + " sides, rolls to: " + Math.floor((Math.random()*diceRoll)+1))