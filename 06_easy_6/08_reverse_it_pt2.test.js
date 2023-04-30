/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reverse It (Part 2) - Tests
 *
 * https://launchschool.com/exercises/866dd469
 *
 */

const reverseIt = require("./08_reverse_it_pt2");

describe("Reversing a sentence and words of at least 5 letters", () => {
  it("Should return an empty string when given an empty string", () => {
    expect(reverseIt.reverseWords("")).toBe("");
  });

  it("Should return the same string when given a single word less than 5 letters", () => {
    expect(reverseIt.reverseWords("Hi")).toBe("Hi");
  });

  it("Should return the string reversed when given a single word of 5 or more letters", () => {
    expect(reverseIt.reverseWords("Hello")).toBe("olleH");
    expect(reverseIt.reverseWords("Professional")).toBe("lanoisseforP");
  });

  it("Should return the words in reverse order when given a sentence of all words 5 or more letters", () => {
    expect(reverseIt.reverseWords("Hello World")).toBe("dlroW olleH");
    expect(reverseIt.reverseWords("Reverse these words")).toBe("sdrow eseht esreveR");
  });
});
