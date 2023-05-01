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
  let result = [];

  for (let i = 1; i <= string.length; i++) {
    result.push(string.slice(0, i));
  }

  return result;
}

module.exports = {
  leadingSubstrings,
};
