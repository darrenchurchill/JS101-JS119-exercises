/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Rotation (Part 2)
 *
 * https://launchschool.com/exercises/38185d87
 *
 */


/**
 * Given a `number` and a `count`, rotate the `count`th digit from the end of
 * `number` to the end of the number.
 * @param {Number} number the number to rotate
 * @param {Number} count which digit, counting from the end of `number`, to
 * rotate
 */
function rotateRightmostDigits(number, count) {
  if (count < 1) throw new Error("`count` must be >= 1");
  let digits = String(number).split("");
  if (count > digits.length) throw new Error("`count` must be < # of digits in `number`");

  digits.push(digits.splice(-count, 1));

  return Number(digits.join(""));
}

module.exports = {
  rotateRightmostDigits,
};
