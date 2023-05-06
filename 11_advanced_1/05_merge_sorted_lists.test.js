/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Merge Sorted Lists - Tests
 *
 * https://launchschool.com/exercises/f86ca7e7
 *
 */

const mergeSortedLists = require("./05_merge_sorted_lists");

describe("Merging two sorted lists", () => {
  it("Should return an empty array if both arrays are empty", () => {
    expect(mergeSortedLists.merge([], [])).toEqual([]);
  });

  it("Should return the non-empty array if one array is empty", () => {
    expect(mergeSortedLists.merge([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSortedLists.merge([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("Should return a new array", () => {
    let array1 = [1, 3, 5];
    let array2 = [2, 4, 6];
    let merged = mergeSortedLists.merge(array1, array2);
    expect(merged).not.toBe(array1);
    expect(merged).not.toBe(array2);
  });

  it("Should not mutate the original arrays", () => {
    let array1 = [1, 3, 5];
    let array1Orig = array1.slice();
    let array2 = [2, 4, 6];
    let array2Orig = array2.slice();
    mergeSortedLists.merge(array1, array2);
    expect(array1).toEqual(array1Orig);
    expect(array2).toEqual(array2Orig);
  });

  it("Should return a sorted array given two sorted arrays", () => {
    let array1 = [1, 5, 9];
    let array2 = [2, 6, 8];
    let expected = array1.concat(array2).sort((a, b) => a - b);
    expect(mergeSortedLists.merge(array1, array2)).toEqual(expected);
  });

  it("May not return a sorted array if either array is not sorted", () => {
    let array1 = [1, 9, 5];
    let array2 = [2, 8, 6];
    let expected = array1.concat(array2).sort((a, b) => a - b);
    expect(mergeSortedLists.merge(array2, array1)).not.toEqual(expected);
  });

  it("Should work if either array runs out of elements before the other", () => {
    expect(mergeSortedLists.merge([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSortedLists.merge([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
