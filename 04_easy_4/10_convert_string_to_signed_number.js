/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a String to a Signed Number
 * Without using the built-in Number() or parseInt() methods
 *
 * https://launchschool.com/exercises/caa46064
 *
 */

const stringToInteger = require("./09_convert_string_to_number");

function stringToSignedInteger(numString) {
  let sign = 1;
  if (numString[0] === "-") {
    sign = -1;
    numString = numString.slice(1);
  } else if (numString[0] === "+") {
    numString = numString.slice(1);
  }

  return sign * stringToInteger.stringToInteger(numString);
}

module.exports = {
  stringToSignedInteger,
};
