const prompt = require("prompt-sync")({sigint: true});

//Counting variables
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let rigCount = 0; // counts rigged rolls
let roll2 = 0; // counts the occurences of actual rolls that equal inputNumber

//Asks user input
console.log("\nChoose a number between 1 - 6 that you want to rig the die with.\nThe number will appear twice as much as the others. ")
inputNumber = Number(prompt("Input number: "));
console.log(typeof inputNumber);
console.log("-------------------------------------");


// While loop to count die rolls
let x = 1;
while(x < 101){
let roll = Math.floor((Math.random() * 7) + 1);

if(roll === 7){ // turns 7 into inputNumber
    roll = inputNumber;
    console.log(x + ". Rigged Dice Roll: " + roll);
    rigCount+=1;

}
else if(roll == inputNumber){
    roll2+=1;
    console.log(x + ". Dice Roll: " + roll);

}
x+=1;

if(roll === 1){
    count1+=1;
}
else if(roll === 2){
    count2+=1;
}
else if(roll === 3){
    count3+=1;
}
else if(roll === 4){
    count4+=1;
}
else if(roll === 5){
    count5+=1;
}
else if(roll === 6){
    count6+=1;
}
}

//Prints die rolls
console.log("-------------------------------------");

console.log("Number of times 1 occured: " + count1);
console.log("Number of times 2 occured: " + count2);
console.log("Number of times 3 occured: " + count3);
console.log("Number of times 4 occured: " + count4);
console.log("Number of times 5 occured: " + count5);
console.log("Number of times 6 occured: " + count6);
console.log("Number of times rigged occured: " + rigCount); 

console.log("-------------------------------------");

console.log(`(Die Roll [${roll2}]) + (Rigged Dice Rolls [${rigCount}]) = ` + (roll2+rigCount) );


