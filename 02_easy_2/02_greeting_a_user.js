/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Greeting a User
 *
 * https://launchschool.com/exercises/ca8ee74b
 *
 */

const readline = require('readline-sync');

function promptForName() {
  return readline.question('What is your name? ');
}

function greet(name, isScreaming = false) {
  let greeting = `Hello ${name}.`;
  if (isScreaming) {
    greeting = greeting.toUpperCase() + ' WHY ARE WE SCREAMING?';
  }
  return greeting;
}

function displayGreeting(name, isScreaming = false) {
  console.log(greet(name, isScreaming));
}

let name = promptForName();
let isScreaming = false;

if (name[name.length - 1] === '!') {
  isScreaming = true;
  name = name.slice(0, name.length - 1);
}

displayGreeting(name, isScreaming);