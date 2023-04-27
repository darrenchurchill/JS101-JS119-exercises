/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Array Average
 *
 * https://launchschool.com/exercises/23864b58
 *
 */

/**
 * Given an array of integers, return the average of the array's integers,
 * rounded down to the nearest integer.
 * @param {Array} integers the array of integers
 * @returns {Number} the average of the array's integers, rounded down to the
 * nearest integer
 */
function average(integers) {
  return Math.floor(
    integers.reduce((sum, value) => sum + value, 0) / integers.length
  );
}

module.exports = {
  average,
};
