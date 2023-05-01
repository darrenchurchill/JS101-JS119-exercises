/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Palindromic Strings
 *
 * https://launchschool.com/exercises/f75e9198
 *
 */

const allSubstrings = require("./05_all_substrings");

/**
 * Return `true` if `string` is a palindrome, `false` otherwise.
 * @param {String} string the string to consider
 * @returns {Boolean} `true` if `string` is a palindrome, `false` otherwise
 */
function isPalindrome(string) {
  if (string.length <= 1) return false;

  let startIndex = 0;
  let endIndex = string.length - 1;

  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) return false;
    startIndex += 1;
    endIndex -= 1;
  }

  return true;
}

/**
 * Given a string, return an array containing all of its palindromic substrings.
 * @param {String} string the input string
 * @returns {Array<String>} an array of `string`'s palindromic substrings
 */
function palindromes(string) {
  return allSubstrings.substrings(string).filter(isPalindrome);
}

module.exports = {
  isPalindrome,
  palindromes,
};
