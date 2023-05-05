/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Word to Digit
 *
 * https://launchschool.com/exercises/9010f84f
 *
 */

const WORD_TO_DIGIT = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

/**
 * Given a string sentence, return a new string where all number words have been
 * replaced with their digit equivalent.
 * @param {String} sentence the sentence to convert
 * @returns {String} the converted sentence
 */
function wordToDigit(sentence) {
  return sentence
    .split(/\b/) // split on word boundaries
    .map((token) => {
      return WORD_TO_DIGIT.hasOwnProperty(token) ? WORD_TO_DIGIT[token] : token;
    })
    .join("");
}

module.exports = {
  wordToDigit,
};
