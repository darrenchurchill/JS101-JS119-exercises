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
  let result = [];
  let remainder = integer;

  do {
    let digit = remainder % 10;
    result.unshift(digit);
    remainder = Math.floor(remainder / 10);
  } while (remainder > 0);

  return result;
}

module.exports = {
  digitList,
};
