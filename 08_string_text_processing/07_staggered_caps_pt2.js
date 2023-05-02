/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Staggered Caps (Part 2)
 *
 * https://launchschool.com/exercises/f6b29024
 *
 */

/**
 * Given a string, return a new string where every other alphabetic character is
 * capitalized and the remaining alphabetic characters are lowercase.
 * Non-alphabetic characters are not changed, and are also not considered
 * characters for the purposes of switching between upper and lowercase.
 * @param {String} string the string to process
 * @returns {String} the string with every other alphabetic character
 * capitalized
 */
function staggeredCase(string) {
  let toggle = 1;
  return string
    .split("")
    .map((char) => {
      if (char.toLowerCase() < "a" || char.toLowerCase() > "z") {
        return char;
      }
      toggle = (toggle + 1) % 2;
      if (toggle === 0) return char.toUpperCase();
      return char.toLowerCase();
    })
    .join("");
}

module.exports = {
  staggeredCase,
};
