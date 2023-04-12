/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Letter Counter (Part 2)
 *
 * https://launchschool.com/exercises/b6496eb8
 *
 */

function wordSizes(string) {
  let result = {};
  let words = string.split(" ");

  words.forEach((word) => {
    let length = word.split("").filter((char) => {
      if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") return true;
      return false;
    }).length;

    if (length === 0) return;

    if (result[length]) result[length] += 1;
    else result[length] = 1;
  });

  return result;
}

module.exports = {
  wordSizes,
};
