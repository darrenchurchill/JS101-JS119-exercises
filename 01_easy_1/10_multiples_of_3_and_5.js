/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 1
 *
 * Multiples of 3 and 5
 *
 * https://launchschool.com/exercises/847823f7
 *
 */

function isMultiple(num, divisor) {
  return num % divisor === 0;
}

function hasMultiple(num, divisors) {
  for (const divisor of divisors) {
    if (isMultiple(num, divisor)) return true;
  }
  return false;
}

function multisum(num) {
  let result = 0;
  let MULTIPLES = [3, 5];
  for (let i = 1; i <= num; i++) {
    if (hasMultiple(i, MULTIPLES)) result += i;
  }
  return result;
}

console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(20) === 98);
console.log(multisum(1000) === 234168);