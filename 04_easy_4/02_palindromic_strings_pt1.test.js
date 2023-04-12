/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Palindromic Strings (Part 1) - Tests
 *
 * https://launchschool.com/exercises/a0491d16
 *
 */

const palindrome = require("./02_palindromic_strings_pt1");

describe("should return true for a palindrome", () => {
  it("should return true for a single character", () => {
    expect(palindrome.isPalindrome("a")).toBe(true);
  });

  it("should return true for a two character palindrome", () => {
    expect(palindrome.isPalindrome("aa")).toBe(true);
  });

  it('should return true for "madam"', () => {
    expect(palindrome.isPalindrome("madam")).toBe(true);
  });

  it('should return true for "356653"', () => {
    expect(palindrome.isPalindrome("356653")).toBe(true);
  });
});

describe("should return false for a non-palindrome", () => {
  it("should return false for an empty string", () => {
    expect(palindrome.isPalindrome("")).toBe(false);
  });

  it('should return false for "Madam"', () => {
    expect(palindrome.isPalindrome("Madam")).toBe(false);
  });

  it('should return false for "madam i\'m adam"', () => {
    expect(palindrome.isPalindrome("madam i'm adam")).toBe(false);
  });
});
