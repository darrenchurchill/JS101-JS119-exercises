/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Binary Search
 *
 * https://launchschool.com/exercises/7c81c642
 *
 */


/**
 * Given a sorted `array` and an `item` to search for within the array, return
 * the item's index if found in the array, or `-1` if not found.
 * @param {Array} array the sorted array to search
 * @param {any} item the item to search for
 * @returns {number} the item's index in the array, or `-1` if not found
 */
function binarySearch(array, item) {
  let mid = Math.floor(array.length / 2);
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    if (array[mid] === item) return mid;
    if (array[mid] < item) low = mid + 1;
    else high = mid - 1;

    mid = Math.floor((high + low ) / 2);
  }

  return -1;
}

module.exports = {
  binarySearch,
};
