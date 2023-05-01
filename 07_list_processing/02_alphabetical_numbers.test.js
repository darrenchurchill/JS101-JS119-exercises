/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Alphabetical Numbers - Tests
 *
 * https://launchschool.com/exercises/6a49d690
 *
 */

const alphaNum = require("./02_alphabetical_numbers");

describe("Sorting numbers by their English word", () => {
  it("Should return an empty array when given an empty array", () => {
    expect(alphaNum.alphabeticNumberSort([])).toEqual([]);
  });

  it("Should return an array with a single element when given an array with a single element", () => {
    expect(alphaNum.alphabeticNumberSort([1])).toEqual([1]);
  });

  it("Should return an array with elements in sorted order by their English word", () => {
    expect(alphaNum.alphabeticNumberSort([1, 2])).toEqual([1, 2]);
    expect(
      alphaNum.alphabeticNumberSort([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ])
    ).toEqual([
      8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0,
    ]);
  });
});
