/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reverse It (Part 2)
 *
 * https://launchschool.com/exercises/866dd469
 *
 */

/**
 * Given a sentence of words separated by spaces, return the sentence with the
 * words in reverse order, and each word at least 5 letters long also reversed.
 * @param {String} sentence the sentence of words to reverse
 * @returns {String} the words in `sentence` in reverse order
 */
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .reverse()
    .map((word) => (word.length < 5 ? word : word.split("").reverse().join("")))
    .join(" ");
}

module.exports = {
  reverseWords,
};
