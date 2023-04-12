/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Running Totals
 *
 * https://launchschool.com/exercises/69839f2f
 *
 */

function runningTotal(numbers) {
  let result = [];
  let total = 0;

  numbers.forEach((number) => {
    total += number;
    result.push(total);
  });

  return result;
}

module.exports = {
  runningTotal,
};
