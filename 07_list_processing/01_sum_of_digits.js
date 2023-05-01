/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Sum of Digits
 *
 * https://launchschool.com/exercises/4a471ab8
 *
 */


/**
 * Given a positive integer, return the sum of its digits.
 * @param {Number} number a positive integer
 * @returns {Number} the sum of `number`'s digits
 */
function sum(number) {
  return String(number)
    .split("")
    .map((digit) => Number(digit))
    .reduce((sum, number) => sum + number);
}

module.exports = {
  sum,
};
