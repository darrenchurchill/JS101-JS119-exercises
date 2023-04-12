/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Letter Counter (Part 1)
 *
 * https://launchschool.com/exercises/7e28695d
 *
 */

function wordSizes(string) {
  if (string.length === 0) return {};

  let result = {};
  let words = string.split(" ");

  words.forEach((word) => {
    if (result[word.length]) result[word.length] += 1;
    else result[word.length] = 1;
  });

  return result;
}

module.exports = {
  wordSizes,
};
