/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Leading Substrings - Tests
 *
 * https://launchschool.com/exercises/50f14ae3
 *
 */

const leadingSubstrings = require("./04_leading_substrings");

describe("Getting all leading substrings of a string", () => {
  it("Should return an empty array when given an empty string", () => {
    expect(leadingSubstrings.leadingSubstrings("")).toEqual([]);
  });

  it("Should return an array with one element when given a string with one character", () => {
    expect(leadingSubstrings.leadingSubstrings("a")).toEqual(["a"]);
  });

  it("Should return an array with all leading substrings of a string", () => {
    expect(leadingSubstrings.leadingSubstrings("abc")).toEqual([
      "a",
      "ab",
      "abc",
    ]);
    expect(leadingSubstrings.leadingSubstrings("xyzzy")).toEqual([
      "x",
      "xy",
      "xyz",
      "xyzz",
      "xyzzy",
    ]);
  });
});
