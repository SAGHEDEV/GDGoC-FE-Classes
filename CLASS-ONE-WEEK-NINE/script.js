// Scopes 
// Global scope
// Block scope
// Function scope
//Lexical scope

// let
// var
// const

// let x = 50;

// Operations and Conditionals

console.log(300 + 40);
console.log("-----------")
console.log("300" + "40");
console.log("-----------")
console.log(500 - 70);
console.log("-----------")
console.log("Divide 400 by 50", "400" / "50")
console.log("-----------")
console.log(400 / 25);
console.log(3 * 45);

console.log(2 ** 3);

console.log(50 % 13);


//Auto increment
let y = 30;
y++; // y = y + 1;
console.log(y);

//Auto decrement
let p = 20;
p--; //p = p - 1;
console.log(p);

// Increment and assign the same time
let x = 30;
// x = 30 + 5;
// x = x + 5;
x += 5;
// x -= 10;
console.log(x);

// += ===> I am adding the coming value to x and assigning the result to x
// -= ===> I am subtracting the coming value from x and assigning the result to x
// *= ===> I am multiplying x by the coming value and assigning the result to x
// /= ===> I am dividing x by the coming value and assigning the result to x

// let w = true;
// console.log(typeof w)

// Comparison Operation
let j = 5;
let k = "5";

const areTheyEqual = j == k;
const greaterThan = j > k;
const lessThan = j < k;
const greaterThanOrEqual = j >= k;
const lessThanOrEqual = j <= k;
const areTheyStrictlyEqual = j === k;
console.log("Are they equal", areTheyEqual);
console.log("Are they strictly equal", areTheyStrictlyEqual);
console.log("Is j greater than k?", greaterThan);
console.log("Is j less than k?", lessThan);
console.log("Is j greater than or equal to k?", greaterThanOrEqual);
console.log("Is j less than or equal to k?", lessThanOrEqual);

// concatenation using the + sign 
let firstName = "Sam";
let lastName = "Emmanuel";
const fullName = firstName + " " + lastName;
console.log(fullName);

//concatenation with template literals
let city = "Ikeja";
let country = "Nigeria";
let state = `Lagos`;
// const locationPlus = "I live in " + city + ", " + country;
const location = `I live in ${city}, ${state} state, ${country}.`;
console.log(location)

// if and else statement
// if (condition){
//     // block code to be executed if the condition is true
// }else{
//     // block code to be executed if the condition is false
// }

let age = 10;
if (age >= 18) {
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible for voting");
}

// if else if else
let score = 50;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("Go back home, you no sabi anything!");
}