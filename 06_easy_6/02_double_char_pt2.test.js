/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Double Char (Part 2) - Tests
 *
 * https://launchschool.com/exercises/560de7d6
 *
 */

const doubleChar = require("./02_double_char_pt2");

describe("Is a character a consonant", () => {
  it("Given a consonant, should return true", () => {
    for (let char of "bcdfghjklmnpqrstvwxyz") {
      expect(doubleChar.isConsonant(char)).toBe(true);
    }
  });

  it("Given a vowel, should return false", () => {
    for (let char of "aeiou") {
      expect(doubleChar.isConsonant(char)).toBe(false);
    }
  });

  it("Given a non-alphabetic character, should return false", () => {
    for (let char of " -_1234567890!@#$%^&*()[]{};':\",./<>?\\|") {
      expect(doubleChar.isConsonant(char)).toBe(false);
    }
  });
});

describe("Repeating each consonant in a string", () => {
  it("Given 'String', should return 'SSttrrinngg'", () => {
    expect(doubleChar.doubleConsonants("String")).toBe("SSttrrinngg");
  });

  it("Given 'Hello-World!', should return 'HHellllo-WWorrlldd!'", () => {
    expect(doubleChar.doubleConsonants("Hello-World!")).toBe(
      "HHellllo-WWorrlldd!"
    );
  });

  it("Given 'July 4th', should return 'JJullyy 4tthh'", () => {
    expect(doubleChar.doubleConsonants("July 4th")).toBe("JJullyy 4tthh");
  });

  it("Given ' ', should return ' '", () => {
    expect(doubleChar.doubleConsonants(" ")).toBe(" ");
  });
});
