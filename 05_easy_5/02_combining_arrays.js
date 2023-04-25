/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Combining Arrays
 *
 * https://launchschool.com/exercises/fc3e7e81
 *
 */


/**
 * Given two arrays, return a new array that is the union of the two inputs.
 * @param {Array} arr1 the first array
 * @param {Array} arr2 the second array
 * @returns {Array} a new array containing the union of the two given arrays
 */
function union(arr1, arr2) {
  let result = [];

  for (let arr of [arr1, arr2]) {
    for (let elem of arr) {
      if (!result.includes(elem)) result.push(elem);
    }
  }

  return result;
}

module.exports = {
  union,
};
