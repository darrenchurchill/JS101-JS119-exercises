/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Multiply All Pairs
 *
 * https://launchschool.com/exercises/2c36b66c
 *
 */


/**
 * Given two non-empty arrays of numbers, return a new array containing every
 * product of pairs between the two arrays, sorted in ascending order.
 * @param {Array<Number>} array1 the first array of numbers
 * @param {Array<Number>} array2 the second array of numbers
 */
function multiplyAllPairs(array1, array2) {
  let result = [];

  array1.forEach((num1) => {
    array2.forEach((num2) => {
      result.push(num1 * num2);
    });
  });

  return result.sort((a, b) => a - b);
}

module.exports = {
  multiplyAllPairs,
};
