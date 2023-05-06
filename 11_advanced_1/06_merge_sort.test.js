/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Merge Sort - Tests
 *
 * https://launchschool.com/exercises/968bc76d
 *
 */

const mergeSort = require("./06_merge_sort");

describe("Sorting an array using Merge Sort", () => {
  it("Should return an empty array if the input array is empty", () => {
    expect(mergeSort.mergeSort([])).toEqual([]);
  });

  it("Should return a new array", () => {
    let array = [9, 5, 7, 1];
    let sorted = mergeSort.mergeSort(array);
    expect(sorted).not.toBe(array);
  });

  it("Should not mutate the original array", () => {
    let array = [9, 5, 7, 1];
    let arrayOrig = array.slice();
    mergeSort.mergeSort(array);
    expect(array).toEqual(arrayOrig);
  });

  it("Should return a sorted array given an unsorted array", () => {
    let array = [9, 5, 7, 1];
    let expected = array.slice().sort((a, b) => a - b);
    expect(mergeSort.mergeSort(array)).toEqual(expected);
  });

  it("Should return a sorted array given an array with an even number of elements", () => {
    let array = [9, 5, 7, 1, 3, 2];
    let expected = array.slice().sort((a, b) => a - b);
    expect(mergeSort.mergeSort(array)).toEqual(expected);
  });

  it("Should return a sorted array given an array with an odd number of elements", () => {
    let array = [9, 5, 7, 1, 3];
    let expected = array.slice().sort((a, b) => a - b);
    expect(mergeSort.mergeSort(array)).toEqual(expected);
  });

  it("Should return a sorted array given a sorted array", () => {
    let array = [1, 5, 7, 9];
    let expected = array.slice().sort((a, b) => a - b);
    expect(mergeSort.mergeSort(array)).toEqual(expected);
  });

  it("Should return a sorted array given an array in reverse sorted order", () => {
    let array = [9, 7, 5, 1];
    let expected = array.slice().sort((a, b) => a - b);
    expect(mergeSort.mergeSort(array)).toEqual(expected);
  });

  it("Should return a sorted array given an array with duplicate elements", () => {
    let array = [9, 5, 7, 1, 5];
    let expected = array.slice().sort((a, b) => a - b);
    expect(mergeSort.mergeSort(array)).toEqual(expected);
  });

  it("Should return a sorted array given an array with string elements", () => {
    let array = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
    let expected = array.slice().sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    expect(mergeSort.mergeSort(array)).toEqual(expected);
  });
});
