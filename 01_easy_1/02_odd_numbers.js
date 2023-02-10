/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * Odd Numbers
 *
 * https://launchschool.com/exercises/e95e7a7d
 *
 */

// isOdd() from Isn't it Odd? Exercise
function isOdd(num) {
  return Math.abs(num) % 2 !== 0
}

for (let i = 1; i <= 99; i++) {
  if (isOdd(i)) console.log(i);
}