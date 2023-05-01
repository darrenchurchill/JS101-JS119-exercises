/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Sum of Sums - Tests
 *
 * https://launchschool.com/exercises/6187c3ec
 *
 */

const sumOfSums = require("./07_sum_of_sums");

describe("Calculating the sum of sums of an array's leading sequences", () => {
  it("Should return the sum of a single element array", () => {
    expect(sumOfSums.sumOfSums([0])).toBe(0);
    expect(sumOfSums.sumOfSums([1])).toBe(1);
    expect(sumOfSums.sumOfSums([5])).toBe(5);
  });

  it("Should return the sum of sums of an array with more than one element", () => {
    expect(sumOfSums.sumOfSums([1, 2])).toBe(4);
    expect(sumOfSums.sumOfSums([1, 2, 3])).toBe(10);
    expect(sumOfSums.sumOfSums([1, 2, 3, 4, 5])).toBe(35);
    expect(sumOfSums.sumOfSums([3, 5, 2])).toBe(21);
    expect(sumOfSums.sumOfSums([1, 5, 7, 3])).toBe(36);
  });
});
