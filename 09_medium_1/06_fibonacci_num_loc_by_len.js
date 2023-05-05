/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Fibonacci Number Location By Length
 *
 * https://launchschool.com/exercises/6e4b7641
 *
 */


/**
 * Generate and yield an infinite sequence of Fibonacci numbers
 * @yields {BigInt} the next Fibonacci number in the sequence
 */
function* fibonacciSequence() {
  let firstPrev = 1n;
  yield firstPrev;
  let secondPrev = 1n;
  yield secondPrev;

  while (true) {
    let cur = firstPrev + secondPrev;
    yield cur;
    [secondPrev, firstPrev] = [firstPrev, cur];
  }
}

/**
 * Return an array of the first `count` Fibonacci numbers
 * @param {Number} count how many Fibonacci numbers to return
 * @throws {Error} if `count` is <= 0
 * @returns {Array<BigInt>} an array of the first `count` Fibonacci numbers
 */
function fibonacciNumbers(count) {
  if (count <= 0) throw new Error("Count must be greater than 0");

  let result = [];
  let fibGen = fibonacciSequence();

  while (result.length < count) {
    result.push(fibGen.next().value);
  }

  return result;
}

/**
 * Given a number of digits, find the index of the first Fibonacci number that
 * has that many digits. Fibonacci numbers are 1-indexed.
 * @param {Number} numDigits how many digits the Fibonacci number should have
 * @throws {Error} if `numDigits` is <= 0
 * @returns {Number} the index of the first Fibonacci number that has the
 * specified number of digits
 */
function findFibonacciIndexByLength(numDigits) {
  if (numDigits <= 0) throw new Error("Number of digits must be greater than 0");

  let curIdx = 1;

  for (let next of fibonacciSequence()) {
    if (String(next).length >= numDigits) return curIdx;
    curIdx += 1;
  }
}

module.exports = {
  fibonacciSequence,
  fibonacciNumbers,
  findFibonacciIndexByLength,
};
