/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Lettercase Counter
 *
 * https://launchschool.com/exercises/6a9bb11e
 *
 */


/**
 * @typedef {Object} LetterCaseCount
 * @property {Number} lowercase the number of lowercase letters in the string
 * @property {Number} uppercase the number of uppercase letters in the string
 * @property {Number} neither the number of characters that are neither
 */

/**
 * Given a string, return an object counting the number of lowercase letters,
 * uppercase letters, and neither.
 * @param {String} string the string to evaluate
 * @returns {}
 */
function letterCaseCount(string) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let char of string) {
    let lower = char.toLowerCase();
    if (lower < "a" || lower > "z") {
      result.neither += 1;
    } else if (char === lower) {
      result.lowercase += 1;
    } else {
      result.uppercase += 1;
    }
  }

  return result;
}

module.exports = {
  letterCaseCount,
};
