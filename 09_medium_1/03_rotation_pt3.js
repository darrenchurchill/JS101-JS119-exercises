/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Rotation (Part 3)
 *
 * https://launchschool.com/exercises/3d704505
 *
 */

const rotation = require("./02_rotation_pt2");

/**
 * Given a `number`, rotate its digits in the following manner:
 * - Rotate the leftmost digit to the number's end
 * - Keep the first digit in place and rotate the 2nd leftmost digit to the end
 * - ...
 * - Keep the first `n` digits in place and rotate the `n+1`th leftmost digit to
 * the end
 * - Stop when there are no digits to the right of the digit to rotate
 * @param {Number} number the number whose digits to rotate
 */
function maxRotation(number) {
  let sign = Math.sign(number);
  let result = Math.abs(number);
  let numDigits = String(result).length;

  for (let i = numDigits; i > 0; i--) {
    result = rotation.rotateRightmostDigits(result, i);
  }

  return sign * result;
}

module.exports = {
  maxRotation,
};
