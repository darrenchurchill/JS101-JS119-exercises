/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 2
 *
 * Odd Lists
 *
 * https://launchschool.com/exercises/23b67c04
 *
 */

function oddities(array) {
  return array.filter((_, idx) => idx % 2 === 0);
}

function arrayEquals(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

console.log(arrayEquals(oddities([2, 3, 4, 5, 6]), [2, 4, 6]));
console.log(arrayEquals(oddities([1, 2, 3, 4, 5, 6]), [1, 3, 5]));
console.log(arrayEquals(oddities(["abc", "def"]), ['abc']));
console.log(arrayEquals(oddities([123]), [123]));
console.log(arrayEquals(oddities([]), []));