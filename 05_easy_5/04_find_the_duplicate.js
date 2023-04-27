/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Find the Duplicate
 *
 * https://launchschool.com/exercises/655086d4
 *
 */


/**
 * Given an array of values, return the first duplicate value found, or null if
 * no duplicates found.
 * @param {Array} array the array of values to search
 * @returns the first duplicate value found, or null if no duplicates found
 */
function findDup(array) {
  let seen = new Set();

  for (let value of array) {
    if (seen.has(value)) return value;
    else seen.add(value);
  }

  return null;
}

module.exports = {
  findDup,
};
