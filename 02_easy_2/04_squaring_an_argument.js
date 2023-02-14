/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Squaring an Argument
 *
 * https://launchschool.com/exercises/5a165802
 *
 */

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);