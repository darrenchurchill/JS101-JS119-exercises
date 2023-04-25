/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Combining Arrays - Tests
 *
 * https://launchschool.com/exercises/fc3e7e81
 *
 */

const union = require("./02_combining_arrays");

describe("Unioning two arrays", () => {
  it("should return an empty array when given two empty arrays", () => {
    expect(union.union([], [])).toEqual([]);
  });

  it("should return an array with the elements of the first array when given an empty second array", () => {
    let expected = [1, 2, 3];
    let result = union.union([1, 2, 3], []);
    expect(result).toEqual(expected);
  });

  it("should return an array with the elements of the second array when given an empty first array", () => {
    let expected = [1, 2, 3];
    let result = union.union([], [1, 2, 3]);
    expect(result).toEqual(expected);
  });

  it("should union two arrays with no common elements", () => {
    let expected = [1, 2, 3, 4, 5, 6];
    let result = union.union([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).toHaveLength(expected.length);
  });

  it("should remove duplicate elements from the union", () => {
    let expected = [1, 3, 5, 6, 9];
    let result = union.union([1, 3, 5], [3, 6, 9]);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).toHaveLength(expected.length);
  });

  describe("should union arrays containing other primitive types", () => {
    it("should union arrays containing strings", () => {
      let expected = ["a", "b", 1, 2];
      let result = union.union(["a", 1], ["b", 2]);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toHaveLength(expected.length);
    });

    it("should union arrays containing booleans", () => {
      let expected = [true, false, 1, 2];
      let result = union.union([true, true, 1], [false, 2]);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toHaveLength(expected.length);
    });

    it("should union arrays containing null", () => {
      let expected = [null, 1, 2];
      let result = union.union([null, 1], [null, 2]);
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toHaveLength(expected.length);
    });
  });
});
