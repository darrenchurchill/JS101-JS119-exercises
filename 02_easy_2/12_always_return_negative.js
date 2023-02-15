/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Always Return Negative
 *
 * https://launchschool.com/exercises/430dc750
 *
 */

function negative(num) {
  return -Math.abs(num);
}

console.log(negative(5) === -5);     // -5
console.log(negative(-3) === -3);    // -3
console.log(Object.is(negative(0), -0));     // -0