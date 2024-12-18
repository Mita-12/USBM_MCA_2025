// Iteration :

// Print from 1 to 10;
// let start_num = 1;
// let next_num1 = start_num + 1;
// let next_num2 = start_num + 1;
// let end_num = 10;
// console.log(start_num);
// console.log(end_num);
// console.log(next_num2);
// let num = 2;
// console.log(num);
// console.log(num);
// console.log(num);

// While loop :

// syntax:
// while (condition) {
// code to be executed
// }

// Ex: Print from 1 to 10;

let num = 1; // declartion
console.log("Global:", num); // print 1

while (num <= 10) {
  console.log("Block:", num); // print
  num++;
}

console.log("Global:", num); // print 11

// Do .. while loop :
// syntax :
// do {
// code to be executed
// } while(condition)

// Ex: Asking for user to the correct input

/* let userAns;

do {
  userAns = prompt("What is the capital of Odisha?");
  //   console.log("Wrong");
} while (userAns !== "Bhubaneswar");

console.log("Correct");

console.log("Bhubanewsar" !== "Bhubanewsar"); // true   */




// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);