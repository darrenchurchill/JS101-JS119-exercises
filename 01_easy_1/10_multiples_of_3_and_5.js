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

function multisum(num) {
  let result = 0;
  let MULTIPLES = [3, 5];
  for (let i = 1; i <= num; i++) {
    for (let multiple of MULTIPLES) {
      if (i % multiple === 0) {
        result += i;
        break;
      }
    }
  }
  return result;
}

console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(20) === 98);
console.log(multisum(1000) === 234168);