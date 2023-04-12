/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Letter Counter (Part 2) - Tests
 *
 * https://launchschool.com/exercises/b6496eb8
 *
 */

const letterCounter = require("./07_letter_counter_pt2");

describe("should return an object with the number of words of each size", () => {
  describe("Non-letter characters do not count toward word length", () => {
    it("Four score and seven.", () => {
      expect(letterCounter.wordSizes("Four score and seven.")).toEqual({
        3: 1,
        4: 1,
        5: 2,
      });
    });

    it("Hey diddle diddle, the cat and the fiddle!", () => {
      expect(
        letterCounter.wordSizes("Hey diddle diddle, the cat and the fiddle!")
      ).toEqual({
        3: 5,
        6: 3,
      });
    });

    it("What's up doc?", () => {
      expect(letterCounter.wordSizes("What's up doc?")).toEqual({
        2: 1,
        3: 1,
        5: 1,
      });
    });
  });

  it("Multiple consecutive spaces should not matter", () => {
    expect(letterCounter.wordSizes("What's    up  doc?")).toEqual({
      2: 1,
      3: 1,
      5: 1,
    });
  });

  it("Empty string", () => {
    expect(letterCounter.wordSizes("")).toEqual({});
  });
});
