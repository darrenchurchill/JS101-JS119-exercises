/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Clean up the Words
 *
 * https://launchschool.com/exercises/6ccbdf07
 *
 */

function cleanUp(string) {
  return string.split(/[^a-z]+/i).join(' ');
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
console.log(cleanUp("---What's my +*& line?") === " What s my line ");