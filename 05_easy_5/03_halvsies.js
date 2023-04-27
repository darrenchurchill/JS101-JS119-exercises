/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Halvsies
 *
 * https://launchschool.com/exercises/c335bef4
 *
 */


/**
 * Given an input array, return an array containing two sub-arrays. The first
 * sub-array should contain the first half of the input array, and the second
 * sub-array should contain the second half of the input array.
 *
 * If the input array contains an odd number of elements, the middle element
 * should be placed in the first half array.
 * @param {Array} array the input array
 * @returns {Array} the array containing the two sub-arrays of first half and
 * second half elements
 */
function halvsies(array) {
  let result = [[], []];

  let midIdx = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) midIdx += 1;

  result[0] = array.slice(0, midIdx);
  result[1] = array.slice(midIdx);

  return result;
}

module.exports = {
  halvsies,
};
