/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Arithmetic Integer
 *
 * https://launchschool.com/exercises/ca8e844b
 *
 */

const readline = require('readline-sync');
const PROMPT = '==> ';

function promptForNumbers() {
  let num1 = readline.questionInt(`${PROMPT} Enter the first number:\n`);
  let num2 = readline.questionInt(`${PROMPT} Enter the second number:\n`);
  return [num1, num2];
}

let [num1, num2] = promptForNumbers();

console.log(`${PROMPT} ${num1} + ${num2} = ${num1 + num2}`);
console.log(`${PROMPT} ${num1} - ${num2} = ${num1 - num2}`);
console.log(`${PROMPT} ${num1} * ${num2} = ${num1 * num2}`);
console.log(`${PROMPT} ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
console.log(`${PROMPT} ${num1} % ${num2} = ${num1 % num2}`);
console.log(`${PROMPT} ${num1} ** ${num2} = ${num1 ** num2}`);