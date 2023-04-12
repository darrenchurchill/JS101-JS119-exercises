/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Palindromic Strings (Part 2) - Tests
 *
 * https://launchschool.com/exercises/5de57318
 *
 */

const palindrome = require("./03_palindromic_strings_pt2");

describe("Test isAlphaNumeric", () => {
  it("should return true for a letter", () => {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    letters.split('').forEach((char) => {
      expect(palindrome.isAlphaNumeric(char)).toBe(true);
    });
  });

  it("should return true for a number", () => {
    let numbers = "0123456789";

    numbers.split('').forEach((char) => {
      expect(palindrome.isAlphaNumeric(char)).toBe(true);
    });
  });

  it("should return false for non-alphanumeric characters", () => {
    let nonAlphaNumeric = " !@#$%^&*()_-=+{}|:<>?[];',./`~";

    nonAlphaNumeric.split('').forEach((char) => {
      expect(palindrome.isAlphaNumeric(char)).toBe(false);
    });
  });
});

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

  it('should return true for "Madam"', () => {
    expect(palindrome.isPalindrome("Madam")).toBe(true);
  });

  it('should return true for "356653"', () => {
    expect(palindrome.isPalindrome("356653")).toBe(true);
  });

  it('should return true for "madam i\'m adam"', () => {
    expect(palindrome.isPalindrome("madam i'm adam")).toBe(true);
  });
});

describe("should return false for a non-palindrome", () => {
  it("should return false for an empty string", () => {
    expect(palindrome.isPalindrome("")).toBe(false);
  });

  it('should return false for "356a753"', () => {
    expect(palindrome.isPalindrome("356a753")).toBe(false);
  });
});
