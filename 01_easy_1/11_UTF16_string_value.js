/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * UTF-16 String Value
 *
 * https://launchschool.com/exercises/b5c52850
 *
 */

function utf16Value(str) {
  return str.split('').reduce(
    (accum, cur) => accum + cur.charCodeAt(0),
    0
  );
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811