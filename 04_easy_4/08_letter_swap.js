/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Letter Swap
 *
 * https://launchschool.com/exercises/0d838471
 *
 */

function swap(string) {
  return string
    .split(" ")
    .map((word) => {
      word = word.split("");
      [word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
      return word.join("");
    })
    .join(" ");
}

module.exports = {
  swap,
};
