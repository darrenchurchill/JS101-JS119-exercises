/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Combine Two Lists - Tests
 *
 * https://launchschool.com/exercises/5e3b1da6
 *
 */

const combine = require("./05_combine_two_lists");

describe("Combining two lists to interleave their elements", () => {
  it("Given two empty arrays, should return an empty array", () => {
    expect(combine.interleave([], [])).toEqual([]);
  });

  it("Given two arrays with one element each", () => {
    expect(combine.interleave([1], [2])).toEqual([1, 2]);
  });

  it("Given two arrays with two elements each", () => {
    expect(combine.interleave([1, 2], [3, 4])).toEqual([1, 3, 2, 4]);
  });

  it("Given two arrays with three elements each", () => {
    expect(combine.interleave([1, 2, 3], [4, 5, 6])).toEqual([
      1, 4, 2, 5, 3, 6,
    ]);
    expect(combine.interleave([1, 2, 3], ["a", "b", "c"])).toEqual([
      1, "a", 2, "b", 3, "c",
    ]);
  });

  it("Given two arrays with different lengths", () => {
    expect(() => combine.interleave([1, 2], [3, 4, 5])).toThrow(
      new Error("Arrays must be same length")
    );
  });
});
