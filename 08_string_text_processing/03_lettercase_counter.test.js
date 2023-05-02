/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Lettercase Counter - Tests
 *
 * https://launchschool.com/exercises/6a9bb11e
 *
 */

const lettercaseCounter = require("./03_lettercase_counter");

describe("Counting the number of different types of characters in a string", () => {
  it("Should return an object with all counts set to 0 when given an empty string", () => {
    expect(lettercaseCounter.letterCaseCount("")).toEqual({
      lowercase: 0, uppercase: 0, neither: 0
    });
  });

  it("Should return an object with the correct counts", () => {
    expect(lettercaseCounter.letterCaseCount("abCdef 123")).toEqual({
      lowercase: 5, uppercase: 1, neither: 4
    });

    expect(lettercaseCounter.letterCaseCount("AbCd +Ef")).toEqual({
      lowercase: 3, uppercase: 3, neither: 2
    });

    expect(lettercaseCounter.letterCaseCount("123")).toEqual({
      lowercase: 0, uppercase: 0, neither: 3
    });
  });
});
