// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane as a string.
// We check if the name variable is equal to Mary as a string.
// The name variable is not equal to Mary, and is equal to Dane, so
// we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret that has yet to be assigned a value.
// We declare a second variable called code that is assigned the value of 123 as a number.
// Lines 59 through 62: We check that the variable code is equal to the number 123.
// Because code does equal 123, the new assigned value of secret is 'super', a string,
// and the new assigned value of code is (123 * 2), or 246.
// Lines 64 through 66: We check that code is greater than 250. If true, we assign the value of 'duper' to secret.
// The check is false (246 is not greater than 250), so the secret does not get the assigned value of 'duper', and keeps its initial assigned value of 'super'.
// We console.log(secret) and see the value of 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable of isStudent with an assigned value of true, a boolean.
// We declare the variable of age with an assigned value of 34, a number.
// We declare the variable of zip with an assigned value of 55407, a number.
// We write a conditional (if/then statement) that checks all three variables in different permutations as follows:
// The first check (Line 90) checks if isStudent is true AND if zip is greater than 80000. This check fails according to each variable's assigned value, and is not logged in the console.
// The second check (Line 92) checks if isStudent is false OR if age is less than 30. This check fails according to each variable's assigned value, and is not logged in the console.
// The third check (Line 94) checks if isStudent is true. This check passes according to each variable's assigned value, and 'Welcome to Prime!' is logged in the console.
// The fourth check (Line 96) does not log to the console because the third check passed the check and is subsequently logged to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to 'blue'.
let colorOne = 'red';
// FIX - colorTwo should be set to 'red'.
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - colorTwo = 'purple'; should be added within the if statement.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - || should be replaced with && because we are checking the AND operator, not the OR operator.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
