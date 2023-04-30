/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Sequence Count
 *
 * https://launchschool.com/exercises/cad01bcb
 *
 */


/**
 * Given a count and a starting number, return an array containing `count`
 * number of elements that are multiples of the starting number.
 * @param {Number} count the number of elements to return
 * @param {Number} start the starting number
 * @returns {Array<Number>} an array containing `count` number of elements that
 * are multiples of the starting number
 */
function sequence(count, start) {
  let result = [];
  let curValue = start;

  for (let _ = 0; _ < count; _++) {
    result.push(curValue);
    curValue += start;
  }

  return result;
}

module.exports = {
  sequence,
};
