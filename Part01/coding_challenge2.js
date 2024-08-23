// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

function calculateBMI(mass, height) {
    return mass / (height * height);
}

let markMass = 70; // kg
let markHeight = 1.7; // meters
let johnMass = 80; // kg
let johnHeight = 1.8; // meters

let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
    console.log(`John and Mark have the same BMI (${johnBMI.toFixed(1)})!`);
}