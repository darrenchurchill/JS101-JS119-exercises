/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reverse It (Part 1) - Tests
 *
 * https://launchschool.com/exercises/866dd469
 *
 */

const reverseIt = require("./07_reverse_it_pt1");

describe("Reversing a sentence", () => {
  it("Should return an empty string when given an empty string", () => {
    expect(reverseIt.reverseSentence("")).toBe("");
  });

  it("Should return the same string when given a single word", () => {
    expect(reverseIt.reverseSentence("Hello")).toBe("Hello");
  });

  it("Should return the words in reverse order when given a sentence", () => {
    expect(reverseIt.reverseSentence("Hello World")).toBe("World Hello");
    expect(reverseIt.reverseSentence("Reverse these words")).toBe("words these Reverse");
  });
});
