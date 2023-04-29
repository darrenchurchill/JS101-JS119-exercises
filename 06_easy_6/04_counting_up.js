/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Counting Up
 *
 * https://launchschool.com/exercises/ac8ee7ae
 *
 */


/**
 * Given a positive integer, return an array containing all the integers from 1
 * up to and including the given integer, in ascending order.
 * @param {Number} integer the positive integer to count up to
 * @returns {Array<Number>} an array containing all the integers from 1 up to
 * and including the given integer, in ascending order
 */
function sequence(integer) {
  let result = [];

  for (let num = 1; num <= integer; num++) result.push(num);

  return result;
}

module.exports = {
  sequence,
};
