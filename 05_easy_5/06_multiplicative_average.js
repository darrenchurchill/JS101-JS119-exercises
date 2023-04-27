/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Multiplicative Average
 *
 * https://launchschool.com/exercises/e8b2e578
 *
 */


/**
 * Given an array of integers, return the multiplicative average of the
 * integers, rounded to 3 decimal places.
 * @param {Array} integers the array of integers
 * @returns {string} the multiplicative average of the integers, rounded to 3
 * decimal places
 */
function multiplicativeAverage(integers) {
  if (integers.length === 0) throw new Error("Array must not be empty");

  let result = 1;
  for (let integer of integers) {
    result *= integer;
  }
  result /= integers.length;

  return result.toFixed(3);
}

module.exports = {
  multiplicativeAverage,
};
