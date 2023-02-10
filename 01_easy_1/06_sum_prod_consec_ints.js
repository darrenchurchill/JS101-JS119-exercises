/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * Sum or Product of Consecutive Integers
 *
 * https://launchschool.com/exercises/64d67f89
 *
 */

const readline = require('readline-sync');

function promptInteger() {
  while (true) {
    let choice = readline.questionInt(
      'Please enter an integer greater than 0: '
    );
    if (choice > 0) return choice;
  }
}

function promptSumOrProduct() {
  const CHOICES = ['s', 'p'];
  while (true) {
    let choice = readline.question(
      'Enter "s" to compute the sum, or "p" to compute the product. '
    ).toLowerCase();
    if (CHOICES.includes(choice)) return choice;
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function computeForEachInt(fromInt, toInt, func) {
  let result = fromInt;
  for (let i = fromInt + 1; i <= toInt; i++) {
    result = func(result, i);
  }
  return result;
}

let toInt = promptInteger();
let choice = promptSumOrProduct();
let func = choice === 's' ? add : multiply;

let total = computeForEachInt(1, toInt, func);
console.log(
  `\nThe ${choice === 's' ? 'sum' : 'product'} of the integers between `
  + `1 and ${toInt} is ${total}.`
);