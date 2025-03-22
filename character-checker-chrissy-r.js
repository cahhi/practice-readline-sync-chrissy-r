const readline = require('readline-sync');

let userWord = readline.question("Please enter a word: ");
let userInput = readline.questionInt("Please enter a number that is the length of your word: ");

let userIndex = userWord[userInput];

console.log("Your character index is: " +userIndex); 