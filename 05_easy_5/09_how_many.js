/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * How Many?
 *
 * https://launchschool.com/exercises/705ea21f
 *
 */


/**
 * Given an array, return a string counting the number of occurrences of each
 * element in the array. If the array is empty, return an empty string.
 * @param {Array} values the input array
 * @returns {String} the string containing the number of occurrences of each
 * element in the array
 */
function countOccurrences(values) {
  let result = {};

  for (let value of values) {
    if (result[value]) result[value] += 1;
    else result[value] = 1;
  }

  return Object.entries(result)
    .map(([key, value]) => `${key} => ${value}`)
    .join("\n");
}

module.exports = {
  countOccurrences,
};
