/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * List Processing
 *
 * Palindromic Strings - Tests
 *
 * https://launchschool.com/exercises/f75e9198
 *
 */

const palindromicStrings = require("./06_palindromic_strings");

describe("Determining whether a string is a palindrome", () => {
  it("Should return false for an empty string", () => {
    expect(palindromicStrings.isPalindrome("")).toBe(false);
  });

  it("Should return false for a single character string", () => {
    expect(palindromicStrings.isPalindrome("a")).toBe(false);
  });

  it("Should return true for strings two or more characters long that are palindromes", () => {
    expect(palindromicStrings.isPalindrome("aa")).toBe(true);
    expect(palindromicStrings.isPalindrome("madam")).toBe(true);
    expect(palindromicStrings.isPalindrome("did")).toBe(true);
    expect(palindromicStrings.isPalindrome("racecar")).toBe(true);
    expect(palindromicStrings.isPalindrome("RacecaR")).toBe(true);
    expect(palindromicStrings.isPalindrome("HelLo oLleH")).toBe(true);
  });

  it("Should return false for strings two or more characters long that are not palindromes", () => {
    expect(palindromicStrings.isPalindrome("Madam")).toBe(false);
    expect(palindromicStrings.isPalindrome("hello")).toBe(false);
    expect(palindromicStrings.isPalindrome("hEllO")).toBe(false);
  });
});

describe("Getting all palindromic substrings of a string", () => {
  it("Should return an empty array when given an empty string", () => {
    expect(palindromicStrings.palindromes("")).toEqual([]);
  });

  it("Should return an empty array when given a string containing no palindromes", () => {
    expect(palindromicStrings.palindromes("abcd")).toEqual([]);
  });

  it("Should return an array with one element when given a string with one palindrome", () => {
    expect(palindromicStrings.palindromes("abbc")).toEqual(["bb"]);
  });

  it("Should return an array with all palindromic substrings of a string", () => {
    expect(
      palindromicStrings.palindromes("hello-madam-did-madam-goodbye")
    ).toEqual([
      "ll",
      "-madam-",
      "-madam-did-madam-",
      "madam",
      "madam-did-madam",
      "ada",
      "adam-did-mada",
      "dam-did-mad",
      "am-did-ma",
      "m-did-m",
      "-did-",
      "did",
      "-madam-",
      "madam",
      "ada",
      "oo",
    ]);

    expect(palindromicStrings.palindromes("knitting cassettes")).toEqual([
      "nittin",
      "itti",
      "tt",
      "ss",
      "settes",
      "ette",
      "tt",
    ]);
  });
});
