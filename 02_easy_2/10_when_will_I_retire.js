/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * When Will I Retire?
 *
 * https://launchschool.com/exercises/27d91b79
 *
 */

const readline = require('readline-sync');

function promptUserAge() {
  return readline.questionInt('What is your age? ');
}

function promptUserRetirementAge() {
  return readline.questionInt('At what age would you like to retire? ');
}

let curYear = new Date().getFullYear();

let age = promptUserAge();
let retirementAge = promptUserRetirementAge();

let yearsToGo = retirementAge - age;
let retirementYear = curYear + yearsToGo;

console.log(`\nIt's ${curYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsToGo} years of work to go!`);