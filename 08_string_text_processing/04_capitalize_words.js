/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Capitalize Words
 *
 * https://launchschool.com/exercises/1fd9c225
 *
 */


/**
 * Given a string of "words" separated by spaces, return a new string with each
 * word capitalized. A capitalized word begins with an uppercase letter and
 * continues with lowercase letters.
 * @param {String} sentence the string of words to capitalize
 * @returns {String} the sentence with each word capitalized
 */
function wordCap(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word;
    })
    .join(" ");
}

module.exports = {
  wordCap,
};
