/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Multiply Lists - Tests
 *
 * https://launchschool.com/exercises/f2543bd4
 *
 */

const multiplyList = require("./07_multiply_lists");

describe("Multiplying two lists together", () => {
  it("Given two empty arrays, should return an empty array", () => {
    expect(multiplyList.multiplyList([], [])).toEqual([]);
  });

  it("Given two arrays with one element each", () => {
    expect(multiplyList.multiplyList([1], [2])).toEqual([2]);
    expect(multiplyList.multiplyList([2], [1])).toEqual([2]);
  });

  it("Given two arrays with two elements each", () => {
    expect(multiplyList.multiplyList([1, 2], [3, 4])).toEqual([3, 8]);
  });

  it("Given arrays of different lengths", () => {
    expect(() => multiplyList.multiplyList([1, 2], [3, 4, 5])).toThrow(
      new Error("Arrays must be same length")
    );
  });
});
