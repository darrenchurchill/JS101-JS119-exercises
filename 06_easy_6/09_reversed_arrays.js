/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reversed Arrays
 *
 * https://launchschool.com/exercises/9b855a60
 *
 */


/**
 * Given an array, reverse its elements in place.
 * @param {Array} array the array to reverse
 * @returns {Array} a reference to the same array, reversed
 */
function reverse(array) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex < endIndex) {
    [array[startIndex], array[endIndex]] = [array[endIndex], array[startIndex]];
    startIndex++;
    endIndex--;
  }

  return array;
}

module.exports = {
  reverse,
};
