/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Stringy Strings
 *
 * https://launchschool.com/exercises/db532919
 *
 */

function stringy(length) {
  return ''.padEnd(length, '10');
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");