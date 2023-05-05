/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Fibonacci Numbers (Procedural)
 *
 * https://launchschool.com/exercises/13738ab2
 *
 */


/**
 * Return the `num`th Fibonacci number
 * @param {Number} num the nth Fibonacci number to calculate
 * @returns {BigInt} the `num`th Fibonacci number
 */
function fibonacci(num) {
  if (num <= 0) throw new Error("Argument must be greater than 0");
  if (num === 1 || num === 2) return 1n;

  let firstPrev = 1n;
  let secondPrev = 1n;
  let result;
  let cur = 3;

  while (cur <= num) {
    result = firstPrev + secondPrev;
    [secondPrev, firstPrev] = [firstPrev, result];
    cur += 1;
  }

  return result;
}

module.exports = {
  fibonacci,
};