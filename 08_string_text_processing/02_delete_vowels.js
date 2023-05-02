/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Delete Vowels
 *
 * https://launchschool.com/exercises/8249329a
 *
 */

/**
 * Given an array of strings, return a new array where all the vowels from all
 * strings have been removed.
 * @param {Array<String>>} strings an array of strings
 * @returns {Array<String>} a new array with the vowels in `strings` removed
 */
function removeVowels(strings) {
  return strings.map((string) =>
    string
      .split("")
      .filter((char) => !"aeiou".includes(char.toLowerCase()))
      .join("")
  );
}

module.exports = {
  removeVowels,
};
