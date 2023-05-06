/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Sum Square - Square Sum
 *
 * https://launchschool.com/exercises/68603298
 *
 */


/**
 * Given a `count` number, return the difference between the square of the sum
 * of the first `count` positive integers and the sum of the squares of the
 * first `count` positive integers.
 *
 * @example
 * sumSquareDifference(3) => (1 + 2 + 3) ** 2 - (1 ** 2 + 2 ** 2 + 3 ** 2)
 * @param {Number} count the number of positive integers to sum
 */
function sumSquareDifference(count) {
  let numbers = [];
  for (let i = 1; i <= count; i++) numbers.push(i);

  return (
    (numbers.reduce((sum, num) => sum + num) ** 2) -
    numbers.reduce((sum, num) => sum + (num ** 2))
  );
}

module.exports = {
  sumSquareDifference,
};
