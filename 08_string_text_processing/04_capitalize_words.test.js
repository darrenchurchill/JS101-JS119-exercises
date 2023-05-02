/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Capitalize Words - Tests
 *
 * https://launchschool.com/exercises/1fd9c225
 *
 */

const capitalizeWords = require("./04_capitalize_words");

describe("Capitalizing words in a sentence", () => {
  it("Should return an empty string when given an empty string", () => {
    expect(capitalizeWords.wordCap("")).toBe("");
  });

  it("Should return a string with each word capitalized", () => {
    expect(capitalizeWords.wordCap("four score and seven")).toBe(
      "Four Score And Seven"
    );
    expect(capitalizeWords.wordCap("the javaScript language")).toBe(
      "The Javascript Language"
    );
    expect(capitalizeWords.wordCap('this is a "quoted" word')).toBe(
      'This Is A "quoted" Word'
    );
  });
});
