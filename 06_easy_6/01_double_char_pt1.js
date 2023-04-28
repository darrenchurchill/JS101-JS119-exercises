/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Double Char (Part 1)
 *
 * https://launchschool.com/exercises/b04f40e2
 *
 */


/**
 * Given a string, return a new string with each character in the original
 * string repeated twice.
 * @param {String} string the string to repeat
 * @returns {String} the string with each character repeated twice
 */
function repeater(string) {
  let result = [];

  for (let char of string) {
    result.push(char, char);
  }

  return result.join("");
}

module.exports = {
  repeater,
};
