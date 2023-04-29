/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reverse Number - Tests
 *
 * https://launchschool.com/exercises/285f9dd6
 *
 */

const reverseNumber = require("./03_reverse_number");

describe("Reversing a number", () => {
  it("Given 12345, should return 54321", () => {
    expect(reverseNumber.reverseNumber(12345)).toBe(54321);
  });

  it("Given 12213, should return 31221", () => {
    expect(reverseNumber.reverseNumber(12213)).toBe(31221);
  });

  it("Given 456, should return 654", () => {
    expect(reverseNumber.reverseNumber(456)).toBe(654);
  });

  it("Given 12000, should return 21; leading zeroes are dropped in the result", () => {
    expect(reverseNumber.reverseNumber(12000)).toBe(21);
  });

  it("Given 1, should return 1", () => {
    expect(reverseNumber.reverseNumber(1)).toBe(1);
  });
});
