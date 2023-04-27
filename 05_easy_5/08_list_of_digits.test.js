/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * List of Digits - Tests
 *
 * https://launchschool.com/exercises/6eb89adf
 *
 */

const digitList = require("./08_list_of_digits");

describe("Generating a list of digits from a positive integer", () => {
  it("Given 0, should return [0]", () => {
    expect(digitList.digitList(0)).toEqual([0]);
  });

  it("Given 1, should return [1]", () => {
    expect(digitList.digitList(1)).toEqual([1]);
  });

  it("Given 12, should return [1, 2]", () => {
    expect(digitList.digitList(12)).toEqual([1, 2]);
  });

  it("Given 12345, should return [1, 2, 3, 4, 5]", () => {
    expect(digitList.digitList(12345)).toEqual([1, 2, 3, 4, 5]);
  });

  it("Given 7, should return [7]", () => {
    expect(digitList.digitList(7)).toEqual([7]);
  });

  it("Given 375290, should return [3, 7, 5, 2, 9, 0]", () => {
    expect(digitList.digitList(375290)).toEqual([3, 7, 5, 2, 9, 0]);
  });

  it("Given 444, should return [4, 4, 4]", () => {
    expect(digitList.digitList(444)).toEqual([4, 4, 4]);
  });
});
