const prompt = require("prompt-sync")({sigint: true});

//the loop asks the question repeatedly
while(true){
let n = Number(prompt("Enter the number of sides you want one your die: "));
console.log("Dice roll: " + Math.floor((Math.random() * n)+ 1));
}

