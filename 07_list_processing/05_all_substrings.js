/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * All Substrings
 *
 * https://launchschool.com/exercises/381f7129
 *
 */

const leadingSubstrings = require("./04_leading_substrings");

/**
 * Given a string, return an array of all of its substrings.
 * @param {String} string the input string
 * @returns {Array<String>} an array of `string`'s substrings
 */
function substrings(string) {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    result.push(...leadingSubstrings.leadingSubstrings(string.slice(i)));
  }

  return result;
}

module.exports = {
  substrings,
};
