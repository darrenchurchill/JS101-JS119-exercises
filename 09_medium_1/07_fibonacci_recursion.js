/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Fibonacci Numbers (Recursion)
 *
 * https://launchschool.com/exercises/2a0d956d
 *
 */


/**
 * Given a number, return the `num`th Fibonacci number
 * @param {Number} num the nth Fibonacci number to calculate
 * @returns {BigInt} the `num`th Fibonacci number
 */
function fibonacci(num) {
  if (num <= 0) throw new Error("Argument must be greater than 0");

  if (num === 1 || num === 2) return 1n;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = {
  fibonacci,
};
