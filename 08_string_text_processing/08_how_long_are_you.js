/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * How Long are You?
 *
 * https://launchschool.com/exercises/82ac0837
 *
 */


/**
 * Given a string of words separated by spaces, return an array containing
 * string elements, where each element is a word from the input string, followed
 * by a space and the word's length.
 * @param {String} string the string of words to process
 * @returns {Array<String>} an array of `${word} ${length}` strings
 */
function wordLengths(string) {
  if (!string) return [];
  return string.split(" ").map((word) => `${word} ${word.length}`);
}

module.exports = {
  wordLengths,
};
