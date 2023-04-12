/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Letter Swap - Tests
 *
 * https://launchschool.com/exercises/0d838471
 *
 */

const letterSwap = require("./08_letter_swap");

describe("The first and last letters of every word in a string are swapped", () => {
  it("Oh what a wonderful day it is", () => {
    expect(letterSwap.swap("Oh what a wonderful day it is")).toBe(
      "hO thaw a londerfuw yad ti si"
    );
  });

  it("Abcde", () => {
    expect(letterSwap.swap("Abcde")).toBe("ebcdA");
  });

  it("a", () => {
    expect(letterSwap.swap("a")).toBe("a");
  });
});
