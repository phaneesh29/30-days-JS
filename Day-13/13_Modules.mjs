// task - 1
const sum = require('./mathModules.js');

console.log(sum(3, 5));

// task - 2 
const details = require("./personModule.js")
console.log(details);
console.log(details.firstName);
console.log(details.age);
console.log(details.city);
details.greet();

// task - 3
const { add, subtract, multiply, divide } = require('./mathModule2.js');

const num1 = 10;
const num2 = 5;
console.log(`Addition: ${add(num1, num2)}`);         // Output: Addition: 15
console.log(`Subtraction: ${subtract(num1, num2)}`); // Output: Subtraction: 5
console.log(`Multiplication: ${multiply(num1, num2)}`); // Output: Multiplication: 50
console.log(`Division: ${divide(num1, num2)}`);     // Output: Division: 2

//task-4

import greet from './greet.mjs';

const name = 'Alice';
console.log(greet(name)); 

// task - 5
 // in 13_two.js
 