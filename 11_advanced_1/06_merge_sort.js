/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Merge Sort
 *
 * https://launchschool.com/exercises/968bc76d
 *
 */

const merge = require("./05_merge_sorted_lists").merge;

/**
 * Given an array, return a new array containing the same elements in sorted
 * order.
 * @param {Array} array the array to sort
 * @returns {Array} a new array containing the same elements in sorted order
 */
function mergeSort(array) {
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left, right);
}

module.exports = {
  mergeSort,
};
