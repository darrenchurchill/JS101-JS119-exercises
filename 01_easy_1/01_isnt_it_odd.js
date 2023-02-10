/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * Isn't it Odd?
 *
 * https://launchschool.com/exercises/2abe5b37
 */

function isOdd(num) {
  return Math.abs(num) % 2 !== 0;
}

console.log("False's:");
console.log(isOdd(2)); // => false
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log("True's:");
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(7)); // => true