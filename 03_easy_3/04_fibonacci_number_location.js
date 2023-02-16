/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 3
 *
 * Fibonacci Number Location by Length
 *
 * https://launchschool.com/exercises/6ec7341d
 *
 */

function numDigits(num) {
  return String(num).length;
}

function* fibonacciSequence() {
  let cur = 1;
  let prev = 0;
  while (true) {
    yield cur;
    let temp = cur;
    cur += prev;
    prev = temp;
  }
}

function findFibonacciIndexByLength(length) {
  const fibonacciIter = fibonacciSequence();
  let count = 0n;
  while (true) {
    let nextFibonacci = fibonacciIter.next().value;
    count += 1n;
    if (numDigits(nextFibonacci) >= length) return count;
  }
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);

// These 3 tests take a very long time to run:
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);