/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * All Substrings - Tests
 *
 * https://launchschool.com/exercises/381f7129
 *
 */

const allSubstrings = require("./05_all_substrings");

describe("Getting all substrings of a string", () => {
  it("Should return an empty array when given an empty string", () => {
    expect(allSubstrings.substrings("")).toEqual([]);
  });

  it("Should return an array with one element when given a string with one character", () => {
    expect(allSubstrings.substrings("a")).toEqual(["a"]);
  });

  it("Should return an array with all a string's substrings", () => {
    expect(allSubstrings.substrings("abcde")).toEqual([
      "a", "ab", "abc", "abcd", "abcde",
      "b", "bc", "bcd", "bcde",
      "c", "cd", "cde",
      "d", "de",
      "e"
    ]);
  });
});
