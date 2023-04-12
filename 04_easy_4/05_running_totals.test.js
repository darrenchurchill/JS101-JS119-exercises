/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Running Totals - Tests
 *
 * https://launchschool.com/exercises/69839f2f
 *
 */

const runningTotal = require("./05_running_totals");

describe("should return the running total of an array", () => {
  it("[] => []", () => {
    expect(runningTotal.runningTotal([])).toEqual([]);
  });

  it("[3] => [3]", () => {
    expect(runningTotal.runningTotal([3])).toEqual([3]);
  });

  it("[2, 5, 13] => [2, 7, 20]", () => {
    expect(runningTotal.runningTotal([2, 5, 13])).toEqual([2, 7, 20]);
  });

  it("[14, 11, 7, 15, 20] => [14, 25, 32, 47, 67]", () => {
    expect(runningTotal.runningTotal([14, 11, 7, 15, 20])).toEqual([
      14, 25, 32, 47, 67,
    ]);
  });
});
