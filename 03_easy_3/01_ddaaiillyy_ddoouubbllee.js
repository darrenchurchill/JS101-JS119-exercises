/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * ddaaiillyy ddoouubbllee
 *
 * https://launchschool.com/exercises/31e4c035
 *
 */

function crunch(str) {
  let result = '';
  let curIdx = 0;

  while (curIdx < str.length) {
    if (result.length === 0 || result[result.length - 1] !== str[curIdx]) {
      result += str[curIdx];
    }
    curIdx += 1;
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === 'daily double');
console.log(crunch('4444abcabccba') === '4abcabcba');
console.log(crunch('ggggggggggggggg') === 'g');
console.log(crunch('a') === 'a');
console.log(crunch('') === '');