/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a Number to a String
 * Without using the built-in String() or toString() methods
 *
 * https://launchschool.com/exercises/74a19009
 *
 */

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = [];

  do {
    let digit = number % 10;
    result.unshift(DIGITS[digit]);
    number = Math.floor(number / 10);
  } while (number > 0);

  return result.join("");
}

module.exports = {
  integerToString,
};
