const readline = require('readline-sync');

let firstName = readline.question("Enter your first name: ");
let lastName = readline.question("Enter your last name: ");
console.log("Hello " +firstName, lastName+ "! It is so great to meet you!");

let firstAnswer = readline.questionInt("What number can be used to represent a falsey? ");
let secondAnswer = readline.question("What do you call the object that stores an ordered list of values? ");
let thirdAnswer = readline.question("What represents a logical entity that can be true or false? ");
let fourthAnswer = readline.question("What represents the intentional absence of any value? ");
let fifthAnswer = readline.question("What represents a unique, immutable identifier? ");

console.log("Here are your answers that you submitted: " +firstAnswer+ ", " +secondAnswer+", " +thirdAnswer+", " +fourthAnswer+", " +fifthAnswer+ ". Thank you for taking this quiz! Goodbye!"); 

