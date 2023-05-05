/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Unlucky Days
 *
 * https://launchschool.com/exercises/071f5a1a
 *
 */


/**
 * Given a year, return the number of Friday the 13ths in that year.
 * @param {Number} year the year to check
 * @returns {Number} the number of Friday the 13ths in the given year
 */
function fridayThe13ths(year) {
  let count = 0;

  for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
    let date = new Date(year, monthIdx, 13);
    if (date.getDay() === 5) count += 1; // 5 is Friday, 0 is Sunday
  }

  return count;
}

module.exports = {
  fridayThe13ths,
};
