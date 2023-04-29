/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Counting Up - Tests
 *
 * https://launchschool.com/exercises/ac8ee7ae
 *
 */

const countingUp = require("./04_counting_up");

describe("Generating a sequence of numbers from 1 to a given number", () => {
  it("Should return an empty array when given 0", () => {
    expect(countingUp.sequence(0)).toEqual([]);
  });

  it("Should return an array containing 1 when given 1", () => {
    expect(countingUp.sequence(1)).toEqual([1]);
  });

  it("Should return an array containing 1, 2 when given 2", () => {
    expect(countingUp.sequence(2)).toEqual([1, 2]);
  });

  it("Should return an array containing 1, 2, 3 when given 3", () => {
    expect(countingUp.sequence(3)).toEqual([1, 2, 3]);
  });

  it("Should return an array containing 1, 2, 3, 4 when given 4", () => {
    expect(countingUp.sequence(4)).toEqual([1, 2, 3, 4]);
  });

  it("Should return an array containing 1, 2, 3, 4, 5 when given 5", () => {
    expect(countingUp.sequence(5)).toEqual([1, 2, 3, 4, 5]);
  });
});
