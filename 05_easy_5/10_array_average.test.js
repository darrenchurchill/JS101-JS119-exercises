/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Array Average - Tests
 *
 * https://launchschool.com/exercises/23864b58
 *
 */

const average = require("./10_array_average");

describe("Calculating an array of integers' integer average", () => {
  it("Given an array with 1 element, should return that element", () => {
    expect(average.average([1])).toBe(1);
  });

  it("Given an array with 2 elements, should return the integer average", () => {
    expect(average.average([1, 2])).toBe(1);
  });

  it("Given an array with 3 elements, should return the integer average", () => {
    expect(average.average([1, 2, 3])).toBe(2);
    expect(average.average([8, 3, 2])).toBe(4);
  });

  it("Given an array with 4 elements, should return the integer average", () => {
    expect(average.average([1, 2, 3, 4])).toBe(2);
    expect(average.average([8, 3, 2, 5])).toBe(4);
  });

  it("Given an array with 5+ elements, should return the integer average", () => {
    expect(average.average([1, 2, 3, 4, 5])).toBe(3);
    expect(average.average([8, 3, 2, 5, 7])).toBe(5);
    expect(average.average([1, 5, 87, 45, 8, 8])).toBe(25);
    expect(average.average([9, 47, 23, 95, 16, 52])).toBe(40);
  });
});
