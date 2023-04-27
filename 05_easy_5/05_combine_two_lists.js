/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Combine Two Lists
 *
 * https://launchschool.com/exercises/5e3b1da6
 *
 */


/**
 * Given two arrays of equal length, return a new array containing each arrays'
 * elements interleaved.
 * @param {Array} array1 the first input array
 * @param {Array} array2 the second input array
 * @returns {Array} the interleaved array
 */
function interleave(array1, array2) {
  if (array1.length !== array2.length) throw new Error("Arrays must be same length");

  let result = [];
  let curIdx = 0;

  while (curIdx < array1.length) {
    result.push(array1[curIdx]);
    result.push(array2[curIdx]);
    curIdx += 1;
  }

  return result;
}

module.exports = {
  interleave,
};
