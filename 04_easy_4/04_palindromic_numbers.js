/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Palindromic Numbers
 *
 * https://launchschool.com/exercises/c16de937
 *
 */

const palindrome = require("./03_palindromic_strings_pt2");

function isPalindromicNumber(number) {
  return palindrome.isPalindrome(number.toString());
}

module.exports = {
  isPalindromicNumber,
};
