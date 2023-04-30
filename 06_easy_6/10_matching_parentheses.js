/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Matching Parentheses?
 *
 * https://launchschool.com/exercises/541d0500
 *
 */


/**
 * Given a string containing zero or more parentheses, return `true` if the
 * parentheses are balanced, `false` otherwise.
 * @param {String} string the string to evaluate
 * @returns {Boolean} `true` if the parentheses in `string` are balanced,
 * `false` otherwise
 */
function isBalanced(string) {
  let filtered = string.split("").filter((char) => char === "(" || char === ")");
  let count = 0;

  for (let paren of filtered) {
    if (paren === "(") count += 1;
    else count -= 1;

    if (count < 0) return false;
  }

  return count === 0;
}

module.exports = {
  isBalanced,
};
