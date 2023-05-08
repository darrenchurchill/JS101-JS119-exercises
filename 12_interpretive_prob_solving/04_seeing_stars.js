/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * Seeing Stars
 *
 * https://launchschool.com/exercises/e41ecf03
 *
 */


/**
 * Given a positive odd integer `width`, generate a `string` star of `"*"`'s
 * in a grid of `width` x `width` characters.
 *
 * `width` must be an odd integer >= 7.
 * @example
 * star(7) => "*  *  *\n" +
 *            " * * * \n" +
 *            "  ***  \n" +
 *            "*******\n" +
 *            "  ***  \n" +
 *            " * * * \n" +
 *            "*  *  *"
 * @param {Number} width
 * @returns {String} the star
 */
// eslint-disable-next-line max-lines-per-function
function star(width) {
  if (width < 7) throw new TypeError("width must be >= 7");
  if (width % 2 === 0) throw new TypeError("width must be an odd integer");

  let result = [];
  let starChar = "*";
  let midIdx = Math.floor(width / 2);
  let indexes = [0, midIdx, width - 1];
  let increment = 1;

  for (let idx = 0; idx < width; idx++) {
    let row = new Array(width).fill(" ");
    indexes.forEach((index) => (row[index] = starChar));

    if (idx === midIdx) {
      increment = -1;
      result.push(starChar.repeat(width));
    } else {
      result.push(row.join(""));
    }

    indexes[0] += increment;
    indexes[2] -= increment;
  }

  return result.join("\n");
}

module.exports = {
  star,
};
