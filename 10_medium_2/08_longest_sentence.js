/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Longest Sentence
 *
 * https://launchschool.com/exercises/a89915a7
 *
 */

/**
 * Given a string containing sentences terminated by `.`, `!`, or `?`, return
 * the string's longest sentence, and a count of the words in that sentence.
 * @example
 * longestSentence("Hello World!") => "Hello World\nThe longest sentence has 2 words."
 * @param {String} string a string containing sentences terminated by `.`, `!`,
 * or `?`
 */
function longestSentence(string) {
  // Sentence delimiters are `.`, `!`, and `?`. Lookbehind for a word boundary
  // so you don't include the space between sentences.
  let sentences = string.match(/(?<=\b)[^.!?]+[.!?]/g);

  // If there are no sentences, try matching the whole string as a sentence.
  if (!sentences) sentences = string.match(/[^.!?]+/g);

  // If there are still no sentences, return the string and a count of 0 words.
  if (!sentences) return `${string}\nThe longest sentence has 0 words.`;

  let longest = "";
  let longestNumWords = 0;

  for (let sentence of sentences) {
    // You can't just use a \w+ (one or more word chars) because it won't match
    // "--" or "don't"
    let numWords = sentence.match(/(?<=^|\s)[^\s]+(?=$|\s)/g).length;
    if (numWords > longestNumWords) {
      longest = sentence;
      longestNumWords = numWords;
    }
  }

  return (
    `${longest}\nThe longest sentence has ${longestNumWords} word` +
    `${longestNumWords > 1 ? "s" : ""}.`
  );
}

module.exports = {
  longestSentence,
};
