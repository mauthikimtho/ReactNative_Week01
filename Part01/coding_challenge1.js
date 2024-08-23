// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

function calculateBMI(mass, height) {
    return mass / (height * height);
}

let markMass = 70; // kg
let markHeight = 1.7; // meters
let johnMass = 80; // kg
let johnHeight = 1.8; // meters

let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);