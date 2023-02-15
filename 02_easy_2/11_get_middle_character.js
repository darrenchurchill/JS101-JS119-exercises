/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Get Middle Character
 *
 * https://launchschool.com/exercises/93f920e2
 *
 */

function centerOf(str) {
  let mid = Math.floor((str.length - 1) / 2);
  if (str.length % 2 === 0) return str.slice(mid, mid + 2);
  return str[mid];
}

console.log(centerOf('I Love JavaScript') === 'a');
console.log(centerOf('Launch School') === ' ');
console.log(centerOf('Launch') === 'un');
console.log(centerOf('Launchschool') === 'hs');
console.log(centerOf('x') === 'x');