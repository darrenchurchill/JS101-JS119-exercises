/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Uppercase Check
 *
 * https://launchschool.com/exercises/59cd044d
 *
 */


/**
 * Given a string, return `true` if all alphabetic characters in the string are
 * uppercase, `false` otherwise.
 * @param {String} string the string to check
 * @returns {Boolean} `true` if all alphabetic characters in `string` are
 * uppercase
 */
function isUppercase(string) {
  return string.split("").every((char) => char === char.toUpperCase());
}

module.exports = {
  isUppercase,
};
