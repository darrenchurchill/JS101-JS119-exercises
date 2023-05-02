/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Staggered Caps (Part 1)
 *
 * https://launchschool.com/exercises/3b0a4549
 *
 */

/**
 * Given a string, return a new string where every other character is
 * capitalized and the remaining characters are lowercase. Non-alphabetic
 * characters are not changed, but are still considered characters for the
 * purposes of switching between upper and lowercase.
 * @param {String} string the string to process
 * @returns {String} the string with every other character capitalized
 */
function staggeredCase(string) {
  return string
    .split("")
    .map((char, index) => {
      // to[Upper|Lower]Case() do not modify non-alphabetic characters
      if (index % 2 === 0) return char.toUpperCase();
      return char.toLowerCase();
    })
    .join("");
}

module.exports = {
  staggeredCase,
};
