/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * How Many? - Tests
 *
 * https://launchschool.com/exercises/705ea21f
 *
 */

const countOccurrences = require("./09_how_many");

describe("Counting occurrences of values in an array", () => {
  it("Given an empty array, should return an empty string", () => {
    expect(countOccurrences.countOccurrences([])).toEqual("");
  });

  it("Given an array with one element, should return that element and 1", () => {
    expect(countOccurrences.countOccurrences(["a"])).toEqual("a => 1");
  });

  it("Given an array with two elements, should return those elements and 1", () => {
    expect(countOccurrences.countOccurrences(["a", "b"])).toEqual(
      "a => 1\nb => 1"
    );
  });

  it("Given an array with two of the same element, should return that element and 2", () => {
    expect(countOccurrences.countOccurrences(["a", "a"])).toEqual("a => 2");
  });

  it("Given an array with three elements, should return those elements and 1", () => {
    expect(countOccurrences.countOccurrences(["a", "b", "c"])).toEqual(
      "a => 1\nb => 1\nc => 1"
    );
  });

  it("Case should matter when counting occurrences", () => {
    expect(countOccurrences.countOccurrences(["a", "A"])).toEqual(
      "a => 1\nA => 1"
    );
  });
});
