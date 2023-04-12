/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a Signed Number to a String
 * Without using the built-in String() or toString() methods
 *
 * https://launchschool.com/exercises/88da7344
 *
 */

const integerToString = require("./11_convert_number_to_string");

function signedIntegerToString(number) {
  let sign = "";

  if (Math.sign(number) === 1) sign = "+";
  else if (Math.sign(number) === -1 || Object.is(Math.sign(number), -0)) {
    sign = "-";
  }

  return sign + integerToString.integerToString(Math.abs(number));
}

module.exports = {
  signedIntegerToString,
};
