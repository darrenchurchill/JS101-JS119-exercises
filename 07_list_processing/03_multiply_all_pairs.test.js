/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Multiply All Pairs - Tests
 *
 * https://launchschool.com/exercises/2c36b66c
 *
 */

const multiplyAllPairs = require("./03_multiply_all_pairs");

describe("Multiplying all pairs of numbers between two arrays", () => {
  it("Should return an array with one element when given two arrays with one element each", () => {
    expect(multiplyAllPairs.multiplyAllPairs([1], [1])).toEqual([1]);
  });

  it("Should return an array containing products of pairs in sorted order", () => {
    expect(multiplyAllPairs.multiplyAllPairs([2, 4], [4, 3, 1, 2])).toEqual([
      2, 4, 4, 6, 8, 8, 12, 16
    ]);
  });
});
