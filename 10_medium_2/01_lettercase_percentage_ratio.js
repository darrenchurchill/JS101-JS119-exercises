/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Lettercase Percentage Ratio
 *
 * https://launchschool.com/exercises/71983fb9
 *
 */


/**
 * @typedef {Object} LettercasePercentages
 * @property {String} lowercase the percentage of lowercase letters in the
 * string
 * @property {String} uppercase the percentage of uppercase letters in the
 * string
 * @property {String} neither the percentage of non-letters in the string
 */

/**
 * Given a string, return the percentage of lowercase, uppercase, and
 * non-letters in the string.
 * @param {String} string the string to analyze
 * @returns {LettercasePercentages} the percentage of lowercase, uppercase, and
 * non-letters in the string
 */
// eslint-disable-next-line max-lines-per-function
function letterPercentages(string) {
  if (string.length === 0) {
    return {
      lowercase: "0.00",
      uppercase: "0.00",
      neither: "0.00",
    };
  }

  let counts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
    total: string.length,
  };

  for (let char of string) {
    if (/[a-z]/.test(char)) counts.lowercase += 1;
    else if (/[A-Z]/.test(char)) counts.uppercase += 1;
    else counts.neither += 1;
  }

  return {
    lowercase: ((counts.lowercase / counts.total) * 100).toFixed(2),
    uppercase: ((counts.uppercase / counts.total) * 100).toFixed(2),
    neither: ((counts.neither / counts.total) * 100).toFixed(2),
  };
}

module.exports = {
  letterPercentages,
};
