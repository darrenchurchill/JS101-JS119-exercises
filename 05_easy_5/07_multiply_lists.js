/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Multiply Lists
 *
 * https://launchschool.com/exercises/f2543bd4
 *
 */


/**
 * Given two arrays of equal length, return a new array containing each element
 * pair's product. A pair of elements is the two elements at the same index in
 * each array.
 * @param {Array} array1 the first input array
 * @param {Array} array2 the second input array
 * @returns {Array} the array containing the product of each element pair
 */
function multiplyList(array1, array2) {
  if (array1.length !== array2.length) throw new Error("Arrays must be same length");

  let result = [];
  let curIdx = 0;

  while (curIdx < array1.length) {
    result.push(array1[curIdx] * array2[curIdx]);
    curIdx += 1;
  }

  return result;
}

module.exports = {
  multiplyList,
};
