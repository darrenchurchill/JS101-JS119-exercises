/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Search Word (Part 1)
 *
 * https://launchschool.com/exercises/5a7a40b6
 *
 */

function escapeRegExp(string) {
  return string.replace(/[!.*+?^$\\!{}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * Given a string `word` to search for within a string `text`, return the number
 * of times `word` appears in `text`.
 * @param {String} word
 * @param {String} text
 */
function searchWord(word, text) {
  let regex = new RegExp(`([^a-z]|\\b|^)${escapeRegExp(word)}([^a-z]|\\b|$)`, "gi");
  return [...text.matchAll(regex)].length;
}

module.exports = {
  searchWord,
};
