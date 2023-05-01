/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Sum of Sums
 *
 * https://launchschool.com/exercises/6187c3ec
 *
 */

/**
 * Given an array of at least one number, return the sum of the sum of each
 * of the array's leading sequences. An array's leading sequences are the
 * sequences of consecutive elements all beginning with the first element. An
 * array with length `n` has `n` leading sequences.
 * @param {Array<Number>} array the input array
 * @returns {Number} the sum of the sum of the `array`'s leading sequences
 */
function sumOfSums(array) {
  return array.reduce(
    (sum, _, index) =>
      sum + array.slice(0, index + 1).reduce((sum, num) => sum + num)
  );
}

module.exports = {
  sumOfSums,
};
