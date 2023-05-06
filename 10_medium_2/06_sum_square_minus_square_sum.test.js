/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Sum Square - Square Sum - Tests
 *
 * https://launchschool.com/exercises/68603298
 *
 */

const sumSquareMinusSquareSum = require("./06_sum_square_minus_square_sum");

describe("Sum Square - Square Sum", () => {
  it("Should return 0 given 1", () => {
    expect(sumSquareMinusSquareSum.sumSquareDifference(1)).toBe(0);
  });

  it("Should return 22 given 3", () => {
    expect(sumSquareMinusSquareSum.sumSquareDifference(3)).toBe(22);
  });

  it("Should return 2640 given 10", () => {
    expect(sumSquareMinusSquareSum.sumSquareDifference(10)).toBe(2640);
  });

  it("Should return 25164150 given 100", () => {
    expect(sumSquareMinusSquareSum.sumSquareDifference(100)).toBe(25164150);
  });
});
