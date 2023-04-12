/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Letter Counter (Part 1) - Tests
 *
 * https://launchschool.com/exercises/7e28695d
 *
 */

const letterCounter = require("./06_letter_counter_pt1");

describe("should return an object with the number of words of each size", () => {
  it("Four score and seven.", () => {
    expect(letterCounter.wordSizes("Four score and seven.")).toEqual({
      3: 1,
      4: 1,
      5: 1,
      6: 1,
    });
  });

  it("Hey diddle diddle, the cat and the fiddle!", () => {
    expect(
      letterCounter.wordSizes("Hey diddle diddle, the cat and the fiddle!")
    ).toEqual({
      3: 5,
      6: 1,
      7: 2,
    });
  });

  it("What's up doc?", () => {
    expect(letterCounter.wordSizes("What's up doc?")).toEqual({
      2: 1,
      4: 1,
      6: 1,
    });
  });

  it("Empty string", () => {
    expect(letterCounter.wordSizes("")).toEqual({});
  });
});
