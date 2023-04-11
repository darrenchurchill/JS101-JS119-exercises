/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Searching 101
 *
 * https://launchschool.com/exercises/5062a16f
 *
 */

const readline = require('readline-sync');

function promptForInteger(msg) {
  return readline.questionInt(msg);
}

function ordinalNum(num, maxNum) {
  if (num === maxNum) return 'last';
  if (num === 11 || num === 12 || num === 13) return `${num}th`;

  let ones = num % 10;

  if (ones === 1) return `${num}st`;
  if (ones === 2) return `${num}nd`;
  if (ones === 3) return `${num}rd`;

  return `${num}th`;
}

function promptUserIntegers(count) {
  let result = [];

  let idx = 1;
  while (idx <= count) {
    result.push(promptForInteger(
      `Enter the ${ordinalNum(idx, count)} number: `)
    );
    idx += 1;
  }

  return result;
}

function lastInFirstNth(array) {
  let idx = array.length - 1;
  let last = array[idx];

  while (idx > 0) {
    if (array[idx - 1] === last) return true;
    idx -= 1;
  }

  return false;
}

function search() {
  const count = 6;
  let userInput = promptUserIntegers(count);
  let firstNth = userInput.slice(0, count - 1);
  let last = userInput[count - 1];

  if (lastInFirstNth(userInput)) {
    console.log(
      `The number ${last} appears in ${firstNth.join(", ")}.`
    );
  } else {
    console.log(
      `The number ${last} does not appear in ${firstNth.join(", ")}.`
    );
  }
}

module.exports = {
  promptForInteger,
  ordinalNum,
  promptUserIntegers,
  lastInFirstNth,
  search,
};