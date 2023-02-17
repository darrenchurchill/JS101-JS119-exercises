/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Double Doubles
 *
 * https://launchschool.com/exercises/583b8edb
 *
 */

function isDoubleNumber(num) {
  let numStr = String(num);
  if (numStr.length % 2 !== 0) return false;

  let firstHalf = numStr.slice(0, numStr.length / 2);
  let secondHalf = numStr.slice(numStr.length / 2);

  return firstHalf === secondHalf;
}

function twice(num) {
  if (isDoubleNumber(num)) return num;
  return num * 2;
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);