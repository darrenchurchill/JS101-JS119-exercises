/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Sum of Digits - Tests
 *
 * https://launchschool.com/exercises/4a471ab8
 *
 */

const sumOfDigits = require("./01_sum_of_digits");

describe("Summing a number's digits", () => {
  it("Should return the sum of a single digit number", () => {
    expect(sumOfDigits.sum(5)).toBe(5);
  });

  it("Should return the sum of a two digit number", () => {
    expect(sumOfDigits.sum(23)).toBe(5);
  });

  it("Should return the sum of a three digit number", () => {
    expect(sumOfDigits.sum(496)).toBe(19);
  });

  it("Should return the sum of other numbers", () => {
    expect(sumOfDigits.sum(123456789)).toBe(45);
  });
});
