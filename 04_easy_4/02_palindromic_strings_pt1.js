/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Palindromic Strings (Part 1)
 *
 * https://launchschool.com/exercises/a0491d16
 *
 */

function isPalindrome(string) {
  if (string.length === 0) return false;

  let firstIdx = 0;
  let lastIdx = string.length - 1;

  while (firstIdx < lastIdx) {
    if (string[firstIdx] !== string[lastIdx]) return false;
    firstIdx += 1;
    lastIdx -= 1;
  }

  return true;
}

module.exports = {
  isPalindrome,
};
