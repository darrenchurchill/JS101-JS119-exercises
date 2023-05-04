/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Search Word (Part 2)
 *
 * https://launchschool.com/exercises/c5f72b07
 *
 */

const searchWord = require("./09_search_word_pt1");

/**
 * Given a string `word` to search for within a string `text`, return `text`
 * with all occurrences of `word` surrounded in two asterisks (*) and all
 * uppercase.
 * @param {String} word
 * @param {String} text
 */
function replaceWord(word, text) {
  let regex = new RegExp(
    `(?<=^|\\b|[^a-z])${searchWord.escapeRegExp(word)}(?=$|\\b|[^a-z])`,
    "gi"
  );
  return text.replace(regex, (match) => `**${match.toUpperCase()}**`);
}

module.exports = {
  replaceWord,
};
