/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * List of Digits
 *
 * https://launchschool.com/exercises/6eb89adf
 *
 */


/**
 * Given a positive integer, return a new array containing a list of the digits
 * in the number.
 * @param {Number} integer the positive integer
 * @returns the array of digits
 */
function digitList(integer) {
  return String(integer).split("").map((digit) => parseInt(digit, 10));
}

module.exports = {
  digitList,
};
