/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Palindromic Strings (Part 2)
 *
 * https://launchschool.com/exercises/5de57318
 *
 */

function isAlphaNumeric(char) {
  char = char.toLowerCase();

  if (char >= "a" && char <= "z") return true;
  if (char >= "0" && char <= "9") return true;

  return false;
}

function isPalindrome(string) {
  if (string.length === 0) return false;

  string = string
    .split("")
    .map((char) => char.toLowerCase())
    .filter((char) => isAlphaNumeric(char))
    .join("");

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
  isAlphaNumeric,
  isPalindrome,
};
