/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Word to Digit - Tests
 *
 * https://launchschool.com/exercises/9010f84f
 *
 */

const wordToDigit = require("./05_word_to_digit");

describe("Replacing number words with their digit equivalent", () => {
  it("Should return an empty string when given an empty string", () => {
    expect(wordToDigit.wordToDigit("")).toBe("");
  });

  it("Should return the same string when given a string with no number words", () => {
    expect(wordToDigit.wordToDigit("Hello World")).toBe("Hello World");
  });

  it("Should replace number words with their digit equivalent", () => {
    expect(wordToDigit.wordToDigit("zero")).toBe("0");
    expect(wordToDigit.wordToDigit("one")).toBe("1");
    expect(wordToDigit.wordToDigit("two")).toBe("2");
    expect(wordToDigit.wordToDigit("three")).toBe("3");
    expect(wordToDigit.wordToDigit("four")).toBe("4");
    expect(wordToDigit.wordToDigit("five")).toBe("5");
    expect(wordToDigit.wordToDigit("six")).toBe("6");
    expect(wordToDigit.wordToDigit("seven")).toBe("7");
    expect(wordToDigit.wordToDigit("eight")).toBe("8");
    expect(wordToDigit.wordToDigit("nine")).toBe("9");

    expect(
      wordToDigit.wordToDigit(
        "Please call me at five five five one two three four. Thanks."
      )
    ).toBe("Please call me at 5 5 5 1 2 3 4. Thanks.");
  });

  it("Should ignore adjacent punctuation", () => {
    expect(wordToDigit.wordToDigit("zero.")).toBe("0.");
    expect(wordToDigit.wordToDigit("zero,")).toBe("0,");
    expect(wordToDigit.wordToDigit("zero!")).toBe("0!");
    expect(wordToDigit.wordToDigit(".zero")).toBe(".0");
    expect(wordToDigit.wordToDigit(",zero")).toBe(",0");
    expect(wordToDigit.wordToDigit("!zero")).toBe("!0");
    expect(wordToDigit.wordToDigit("zero, one, two,...three")).toBe(
      "0, 1, 2,...3"
    );
  });

  it("Should ignore adjacent letters", () => {
    expect(wordToDigit.wordToDigit("zeroone")).toBe("zeroone");
    expect(wordToDigit.wordToDigit("weight")).toBe("weight");
  });
});
