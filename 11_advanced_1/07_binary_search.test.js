/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Binary Search - Tests
 *
 * https://launchschool.com/exercises/7c81c642
 *
 */

const binarySearch = require("./07_binary_search");

describe("Searching for an item in a sorted array", () => {
  it("Should return -1 if the array is empty", () => {
    expect(binarySearch.binarySearch([], 1)).toBe(-1);
  });

  it("Should return -1 if the item is not in the array", () => {
    expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  describe("Should return the item's index if it is in the array", () => {
    it("Should find the item if it is the first element", () => {
      expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    });

    it("Should find the item if it is the last element", () => {
      expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    it("Should find the item if it is in the middle", () => {
      expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    it("Should find the item if it is somewhere else (not first, last, or middle)", () => {
      expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
      expect(binarySearch.binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
    });
  });

  it("Should work with arrays containing an odd number of elements", () => {
    expect(binarySearch.binarySearch([1, 2, 3, 4, 5, 6, 7], 4)).toBe(3);
  });

  it("Should work with arrays containing an even number of elements", () => {
    expect(binarySearch.binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });

  it("Should work with arrays containing only one element", () => {
    expect(binarySearch.binarySearch([1], 1)).toBe(0);
  });

  it("Should work with arrays containing other types of element", () => {
    expect(binarySearch.binarySearch(["a", "b", "c", "d", "e"], "c")).toBe(2);
    expect(binarySearch.binarySearch(["a", "b", "c", "d", "e"], "a")).toBe(0);
    expect(binarySearch.binarySearch(["a", "b", "c", "d", "e"], "e")).toBe(4);
  });
});
