const todaysDateAndTime = new Date();
console.log(todaysDateAndTime);

const dayOfTheWeek = todaysDateAndTime.getDay();
console.log(dayOfTheWeek);

let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// 0=>1
// 1=>2
// 2=>3
// 3=>4
// 4=>5
// 5=>6
// 6=>7

// console.log(`Hello ${daysOfTheWeek[dayOfTheWeek]}!`);

if (dayOfTheWeek == 0) {
    console.log("Happy Sunday! It's time to relax and recharge.");
} else if (dayOfTheWeek == 1) {
    console.log("Happy Monday! It's time to start the week.");
} else if (dayOfTheWeek == 2) {
    console.log("Happy Tuesday! It's time to get to work.");
} else if (dayOfTheWeek == 3) {
    console.log("Happy Wednesday! It's time to push through.");
} else if (dayOfTheWeek == 4) {
    console.log("Happy Thursday! It's almost the weekend.");
} else if (dayOfTheWeek == 5) {
    console.log("Happy Friday! It's time to celebrate.");
} else if (dayOfTheWeek == 6) {
    console.log("Happy Saturday! It's time to have some fun.");
}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

switch (dayOfTheWeek) {
    case 0:
        console.log("Happy Sunday! It's time to relax and recharge.");
        break;
    case 1:
        console.log("Happy Monday! It's time to start the week.");
        break;
    case 2:
        console.log("Happy Tuesday! It's time to get to work.");
        break;
    case 3:
        console.log("Happy Wednesday! It's time to push through.");
        break;
    case 4:
        console.log("Happy Thursday! It's almost the weekend.");
        break;
    case 5:
        console.log("Happy Friday! It's time to celebrate.");
        break;
    case 6:
        console.log("Happy Saturday! It's time to have some fun.");
        break;
}

// Notaion or complexity for this kind of code would be O(n)


// Loop in JavaScript

for (let i = 0; i <= 10; i++) {
    console.log(i);
}