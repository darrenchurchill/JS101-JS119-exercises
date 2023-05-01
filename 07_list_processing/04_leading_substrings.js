/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Leading Substrings
 *
 * https://launchschool.com/exercises/50f14ae3
 *
 */


/**
 * Given a string, return an array of all of its leading substrings. A leading
 * substring starts at the string's first character.
 * @param {String} string the input string
 * @returns {Array<String>} an array of `string`'s leading substrings
 */
function leadingSubstrings(string) {
  return string.split("").map((_, index) => string.slice(0, index + 1));
}

module.exports = {
  leadingSubstrings,
};
