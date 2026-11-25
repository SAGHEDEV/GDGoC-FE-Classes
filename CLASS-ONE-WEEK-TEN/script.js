// Types of Loop
// 1. For loop
// 2. While loop
// 3. Do while loop
// 4. For each loop


// let y = 4;

// => For Loop
// for (exp1; exp2; exp3){

// }
// exp1 => initialization (optional)
// exp2 => condition (optional)
// exp3 => increment or decrement (optional)

// for (let i = 0; i <= 10; i++) {
//     console.log(i + " I love GDG");
// }
// for (let i = 10; i >= 0; i--) {
//     console.log(i + " I love GDG");
// }

const cars = ["BMW", "Totoya", "Buggatti", "Lexus", "Mercedes", "Tesla"];

// console.log(`Car 1 is ${cars[0]}, Car 2 is ${cars[1]}, Car 3 is ${cars[2]}, Car 4 is ${cars[3]}, Car 5 is ${cars[4]}, Car 6 is ${cars[5]}`)

let text = ""
// let i = 0;
// for (let y = 0; y < cars.length; y++) {
//     text += `Car ${y + 1} is ${cars[y]}, `
// }

// console.log(text);

// console.log(y);


// => while loop

// while (condition){
//     // code to be executed
// }

// let i = 0;
// while (i < cars.length) {
//     console.log(`Car ${i + 1} is ${cars[i]}`);
//     i++;
// }


// ==> Do While Loop

// do{
//     // code to be executed
// }while(condition)

// let i = 6;
// do {
//     console.log(cars[i]);
//     i++;
// } while (i < cars.length);


// for each loop 
// array.forEach((element, index, array) => {
//     
// });

// cars.forEach((car, index) => {
//     console.log(car);
//     console.log(index)
// });