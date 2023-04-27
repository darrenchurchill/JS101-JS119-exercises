/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Find the Duplicate - Tests
 *
 * https://launchschool.com/exercises/655086d4
 *
 */

const findDup = require("./04_find_the_duplicate");

describe("Find the duplicate value in an array", () => {
  it("Given an empty array, should return null", () => {
    expect(findDup.findDup([])).toBeNull();
  });

  it("Given an array with one element, should return null", () => {
    expect(findDup.findDup([5])).toBeNull();
  });

  it("Given an array with two elements, should return null", () => {
    expect(findDup.findDup([1, 2])).toBeNull();
  });

  it("Given an array with three or more elements, but no duplicate, should return null", () => {
    expect(findDup.findDup([1, 2, 3])).toBeNull();
    expect(findDup.findDup([1, 2, 3, 4, 5, 6, 7])).toBeNull();
  });

  it("Given an array with a duplicate, should return the duplicate value", () => {
    expect(findDup.findDup([1, 2, 3, 4, 5, 5])).toBe(5);
    expect(findDup.findDup([1, 5, 3, 1])).toBe(1);
    expect(
      findDup.findDup([
        18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59,
        53, 27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77,
        52, 49, 37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35,
        94, 73, 98, 3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87,
        51, 17, 66, 20, 28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7,
        34, 57, 74, 45, 11, 88, 67, 5, 58,
      ])
    ).toBe(73);
  });

  it("Given an array with multiple duplicates, should return the first duplicate value", () => {
    expect(findDup.findDup([1, 2, 3, 4, 5, 5, 4])).toBe(5);
  });
});
