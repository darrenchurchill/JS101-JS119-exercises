/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Alphabetical Numbers
 *
 * https://launchschool.com/exercises/6a49d690
 *
 */


/**
 * Given two integers in the range 0-19, return -1, 0, or 1 based on whether
 * the English word for the first number is less than, equal to, or greater
 * than the English word for the second number. This follows the spec for
 * `Array.prototype.sort()`'s `compareFn` callback.
 * @param {Number} num1 the first number
 * @param {Number} num2 the second number
 * @returns {Number} -1, 0, or 1 based on the comparison of the two numbers'
 * English words
 */
function englishWordOrder(num1, num2) {
  const INTEGER_TO_WORD = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
    6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
    11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
  };

  const word1 = INTEGER_TO_WORD[num1];
  const word2 = INTEGER_TO_WORD[num2];

  if (word1 < word2) return -1;
  if (word1 > word2) return 1;
  return 0;
}

/**
 * Given an array of integers in the range 0-19, return an array of those
 * integers sorted based on the English word for each number.
 * @param {Array<Number>} numbers the array of integers to sort
 * @returns {Array<Number>} the sorted array of integers
 */
function alphabeticNumberSort(numbers) {
  return numbers.slice().sort((num1, num2) => englishWordOrder(num1, num2));
}

module.exports = {
  alphabeticNumberSort,
};
