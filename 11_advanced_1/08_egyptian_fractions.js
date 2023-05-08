/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Egyptian Fractions
 *
 * https://launchschool.com/exercises/8be56b7e
 *
 */

const Fraction = require("fraction.js");

/**
 * Given a rational number, a `Fraction` object, return an array containing the
 * denominators of its Egyptian fraction representation.
 * @param {Fraction} fraction the rational number to convert to an Egyptian
 * fraction
 * @returns {Array<Number>} an array containing the denominators of the
 * rational number's Egyptian fraction representation
 */
function egyptian(fraction) {
  let result = [];
  let curDenominator = 1;
  let remainder = fraction.clone();

  while (remainder.n !== 0) {
    if (Fraction(1, curDenominator).compare(remainder) <= 0) {
      result.push(curDenominator);
      remainder = remainder.sub(Fraction(1, curDenominator));
    }

    curDenominator += 1;
  }

  return result;
}

/**
 * Given an array of `Number`'s an Egyptian fraction's denominators, return
 * the Egyptian fraction's rational `Number`.
 * @param {Array<Number>} denominators an array containing an Egyptian
 * fraction's denominators
 * @returns {Number} the Egyptian fraction's rational number
 */
function unegyptian(denominators) {
  if (!Array.isArray(denominators)) {
    throw new TypeError("Argument must be an array");
  }
  if (denominators.length === 0) {
    throw new TypeError("Argument must not be an empty array");
  }

  return denominators.reduce((sum, denominator) => sum + (1 / denominator), 0);
}

module.exports = {
  egyptian,
  unegyptian,
};
