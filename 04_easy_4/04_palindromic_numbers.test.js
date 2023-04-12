/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Palindromic Numbers - Tests
 *
 * https://launchschool.com/exercises/c16de937
 *
 */

const palindrome = require("./04_palindromic_numbers");

describe("should return true for a palindrome", () => {
  it("should return true for 34543", () => {
    expect(palindrome.isPalindromicNumber(34543)).toBe(true);
  });

  it("should return true for 22", () => {
    expect(palindrome.isPalindromicNumber(22)).toBe(true);
  });

  it("should return true for 5", () => {
    expect(palindrome.isPalindromicNumber(5)).toBe(true);
  });
});

describe("should return false for a non-palindrome", () => {
  it("should return false for 123210", () => {
    expect(palindrome.isPalindromicNumber(123210)).toBe(false);
  });
});
