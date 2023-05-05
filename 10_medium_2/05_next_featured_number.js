/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Next Featured Number Higher than a Given Value
 *
 * https://launchschool.com/exercises/135a426a
 *
 */

/**
 * Given a number, return true if it is a featured number, false otherwise.
 * @param {Number} number the number to check
 * @returns {Boolean} true if the number is a featured number, false otherwise
 */
function isFeatured(number) {
  return (
    number % 2 === 1 &&
    number % 7 === 0 &&
    new Set(String(number)).size === String(number).length
  );
}

/**
 * Given an integer `number`, return the next featured number greater than
 * `number`. If there is no next featured number, return an error message.  A
 * featured number is an odd number that's a multiple of 7, with all of its
 * digits occurring exactly once each.
 *
 * By definition, the largest possible featured number is `9876543201`.
 * @param {Number} number the number to start at
 * @returns {Number} the next featured number greater than `number`
 */
function featured(number) {
  const MAX_FEATURED = 9876543201;

  let next = number + (7 - (number % 7));

  while (next <= MAX_FEATURED) {
    if (isFeatured(next)) return next;
    next += 7;
  }

  throw new Error("No number fulfills these requirements.");
}

module.exports = {
  isFeatured,
  featured,
};
