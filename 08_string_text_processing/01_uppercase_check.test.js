/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Uppercase Check - Tests
 *
 * https://launchschool.com/exercises/59cd044d
 *
 */

const uppercaseCheck = require("./01_uppercase_check");

describe("Checking if a string is all uppercase", () => {
  it("Should return true when given an empty string", () => {
    expect(uppercaseCheck.isUppercase("")).toBe(true);
  });

  it("Should return true when given a string with no lowercase letters", () => {
    expect(uppercaseCheck.isUppercase("ABC")).toBe(true);
  });

  it("Should return false when given a string with lowercase letters", () => {
    expect(uppercaseCheck.isUppercase("AbC")).toBe(false);
  });

  it("Should return true if all alphabetic characters are uppercase", () => {
    expect(uppercaseCheck.isUppercase("4SCORE")).toBe(true);
  });

  it("Shout return false if any alphabetic characters are lowercase", () => {
    expect(uppercaseCheck.isUppercase("4Score")).toBe(false);
  });
});
