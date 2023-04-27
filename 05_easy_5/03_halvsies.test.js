/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Halvsies - Tests
 *
 * https://launchschool.com/exercises/c335bef4
 *
 */

const halvsies = require("./03_halvsies");

describe("Splitting an array into two halves", () => {
  it("Given an empty array, should return an array containing two empty arrays", () => {
    expect(halvsies.halvsies([])).toEqual([[], []]);
  });

  it("Given an array with one element", () => {
    expect(halvsies.halvsies([5])).toEqual([[5], []]);
  });

  it("Given an array with two elements", () => {
    expect(halvsies.halvsies([1, 2])).toEqual([[1], [2]]);
  });

  it("Given an array an odd number of elements", () => {
    expect(halvsies.halvsies([1, 2, 3])).toEqual([[1, 2], [3]]);
    expect(halvsies.halvsies([1, 5, 2, 4, 3])).toEqual([
      [1, 5, 2],
      [4, 3],
    ]);
  });

  it("Given an array with an even number of elements", () => {
    expect(halvsies.halvsies([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(halvsies.halvsies([1, 5, 2, 4, 3, 6])).toEqual([
      [1, 5, 2],
      [4, 3, 6],
    ]);
  });
});
