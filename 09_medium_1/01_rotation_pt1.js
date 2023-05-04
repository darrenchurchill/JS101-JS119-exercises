/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Rotation (Part 1)
 *
 * https://launchschool.com/exercises/d00dcc58
 *
 */


/**
 * Given an array, return a new array, rotated, where the first element has been
 * moved to the end of the array.
 * @param {Array} array the array to rotate
 * @returns {Array} the new rotated array
 */
function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;

  let result = array.slice();
  if (result.length > 0) result.push(result.shift());

  return result;
}

module.exports = {
  rotateArray,
};
