/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Fibonacci Numbers (Memoization)
 *
 * https://launchschool.com/exercises/f3bfa787
 *
 */

let fibonacciMemo = {
  1: 1n,
  2: 1n,
};

/**
 * Given a number, return the `num`th Fibonacci number
 * @param {Number} num the nth Fibonacci number to calculate
 * @returns {BigInt} the `num`th Fibonacci number
 */
function fibonacci(num) {
  if (num <= 0) throw new Error("Argument must be greater than 0");
  if (fibonacciMemo[num]) return fibonacciMemo[num];

  fibonacciMemo[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return fibonacciMemo[num];
}

module.exports = {
  fibonacci,
};
