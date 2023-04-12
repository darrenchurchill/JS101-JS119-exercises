/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a String to a Number
 * Without using the built-in Number() or parseInt() methods
 *
 * https://launchschool.com/exercises/dd7af4f0
 *
 */

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToInteger(numString) {
  let digits = numString.split("");
  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[digits.length - 1 - i];
    result += DIGITS[digit] * (10 ** i);
  }

  return result;
}

module.exports = {
  stringToInteger,
};
