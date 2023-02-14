/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Exclusive Or
 *
 * https://launchschool.com/exercises/5fbc59a5
 *
 */

function xor(val1, val2) {
  // val1    val2    OR     AND    !AND   OR && !AND  output
  // true    true    true   true   false  false       false
  // true    false   true   false  true   true        true
  // false   true    true   false  true   true        true
  // false   false   false  false  true   false       false
  return (val1 || val2) && !(val1 && val2);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);