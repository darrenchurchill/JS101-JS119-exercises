/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reverse Number
 *
 * https://launchschool.com/exercises/285f9dd6
 *
 */


/**
 * Given a positive integer, return the number with its digits reversed.
 * @param {Number} integer the positive integer to reverse
 * @returns {Number} the reversed integer
 */
function reverseNumber(integer) {
  return Number(String(integer).split("").reverse().join(""));
}

module.exports = {
  reverseNumber,
};
