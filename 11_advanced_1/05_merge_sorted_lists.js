/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Merge Sorted Lists
 *
 * https://launchschool.com/exercises/f86ca7e7
 *
 */


/**
 * Given two sorted arrays, return a new array containing both arrays' elements
 * in sorted order.
 * @param {Array} array1 the first sorted array
 * @param {Array} array2 the second sorted array
 * @returns {Array} a new array containing both arrays' elements in sorted order
 */
function merge(array1, array2) {
  let result = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length || index2 < array2.length) {
    if (index2 === array2.length || array1[index1] < array2[index2]) {
      result.push(array1[index1]);
      index1 += 1;
    } else {
      result.push(array2[index2]);
      index2 += 1;
    }
  }

  return result;
}

module.exports = {
  merge,
};
