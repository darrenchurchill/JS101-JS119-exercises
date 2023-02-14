/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * Short Long Short
 *
 * https://launchschool.com/exercises/c55f9982
 *
 */

function shortLongShort(str1, str2) {
  let short = str1;
  let long = str2;
  if (short.length >= long.length) {
    let temp = short;
    short = long;
    long = temp;
  }
  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");