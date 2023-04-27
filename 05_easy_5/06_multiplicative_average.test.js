/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Multiplicative Average - Tests
 *
 * https://launchschool.com/exercises/e8b2e578
 *
 */

const multiplicativeAverage = require("./06_multiplicative_average");

describe("Calculating the multiplicative average of an array of integers", () => {
  it("Given an empty array, should throw an error", () => {
    expect(() => multiplicativeAverage.multiplicativeAverage([])).toThrow();
  });

  it("Given an array of one integer, should return the integer", () => {
    expect(multiplicativeAverage.multiplicativeAverage([1])).toBe("1.000");
  });

  it("Given an array of two integers, should return the multiplicative average", () => {
    expect(multiplicativeAverage.multiplicativeAverage([1, 2])).toBe("1.000");
    expect(multiplicativeAverage.multiplicativeAverage([1, 1, 2])).toBe("0.667");
    expect(multiplicativeAverage.multiplicativeAverage([2, 2])).toBe("2.000");
    expect(multiplicativeAverage.multiplicativeAverage([3, 5])).toBe("7.500");
    expect(
      multiplicativeAverage.multiplicativeAverage([2, 5, 7, 11, 13, 17])
    ).toBe("28361.667");
  });
});
