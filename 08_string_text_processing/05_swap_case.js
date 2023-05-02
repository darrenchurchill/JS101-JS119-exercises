/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Swap Case
 *
 * https://launchschool.com/exercises/7d7dbbbe
 *
 */


/**
 * Given a string, return a new string where each letter's case has been
 * swapped. Uppercase letters should be lowercase and vice versa.
 * @param {String} string the string to process
 * @returns {String} the string with each letter's case swapped
 */
function swapCase(string) {
  return string.split("").map((char) => {
    if (char === char.toUpperCase()) {  // also covers non-alphabetic chars
      return char.toLowerCase();
    }
    return char.toUpperCase();
  }).join("");
}

module.exports = {
  swapCase,
};
