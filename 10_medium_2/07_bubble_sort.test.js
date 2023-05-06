/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Bubble Sort - Tests
 *
 * https://launchschool.com/exercises/b648e695
 *
 */

const bubbleSort = require("./07_bubble_sort");

describe("Bubble Sort", () => {
  it("Should return a reference to the original array. The sort is in-place.", () => {
    const array = [1, 2, 3];
    expect(bubbleSort.bubbleSort(array)).toBe(array);
  });

  it("Given an empty array, should return an empty array", () => {
    expect(bubbleSort.bubbleSort([])).toEqual([]);
  });

  it("Given an array with one element, should return the array", () => {
    expect(bubbleSort.bubbleSort([1])).toEqual([1]);
  });

  it("Given an array with two or more elements, should return the sorted array", () => {
    expect(bubbleSort.bubbleSort([5, 3])).toEqual([3, 5]);
    expect(bubbleSort.bubbleSort([6, 2, 7, 1, 4])).toEqual([1, 2, 4, 6, 7]);
    expect(
      bubbleSort.bubbleSort([
        "Sue",
        "Pete",
        "Alice",
        "Tyler",
        "Rachel",
        "Kim",
        "Bonnie",
      ])
    ).toEqual(["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]);
  });
});
