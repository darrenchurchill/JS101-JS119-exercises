/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * The End is Near But Not Here
 *
 * https://launchschool.com/exercises/e05e5eee
 *
 */

function penultimate(words) {
  words = words.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");