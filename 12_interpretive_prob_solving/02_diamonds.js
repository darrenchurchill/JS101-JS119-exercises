/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * Diamonds
 *
 * https://launchschool.com/exercises/02297071
 *
 */

/**
 * Given a positive odd integer `width`, generate a `string` diamond of `"*"`'s
 * with that width.
 * @param {Number} width the diamond width
 * @returns {String} the diamond
 */
function diamond(width) {
  if (width < 1) throw new TypeError("width must be >= 1");
  if (width % 2 === 0) throw new TypeError("width must be an odd integer");

  let diamondChar = "*";
  let curWidth = 1;

  return new Array(width)
    .fill()
    .map((row, idx) => {
      let padding = " ".repeat((width - curWidth) / 2);
      row = padding + diamondChar.repeat(curWidth) + padding;
      if (idx < Math.floor(width / 2)) curWidth += 2;
      else curWidth -= 2;
      return row;
    })
    .join("\n");
}

module.exports = {
  diamond,
};
