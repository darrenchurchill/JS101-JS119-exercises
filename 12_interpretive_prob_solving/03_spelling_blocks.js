/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * Spelling Blocks
 *
 * https://launchschool.com/exercises/d219156d
 *
 */

/**
 * Given a string, return `true` if the string can be spelled using the blocks
 * from the given array, `false` otherwise.
 * @param {String} string the string to check
 * @param {Array} blocks the array of spelling blocks
 * @returns {Boolean} `true` if the string can be spelled using the blocks,
 * `false` otherwise
 */
// eslint-disable-next-line max-lines-per-function
function isBlockWord(
  string,
  blocks = [
    ["B", "O"],
    ["X", "K"],
    ["D", "Q"],
    ["C", "P"],
    ["N", "A"],
    ["G", "T"],
    ["R", "E"],
    ["F", "S"],
    ["J", "W"],
    ["H", "U"],
    ["V", "I"],
    ["L", "Y"],
    ["Z", "M"],
  ]
) {
  let blockPairs = blocks.reduce((pairs, [c1, c2]) => {
    pairs[c1] = c2;
    pairs[c2] = c1;
    return pairs;
  }, {});

  for (let char of string) {
    char = char.toUpperCase();
    if (!blockPairs[char]) return false;
    delete blockPairs[blockPairs[char]];
    delete blockPairs[char];
  }

  return true;
}

module.exports = {
  isBlockWord,
};
