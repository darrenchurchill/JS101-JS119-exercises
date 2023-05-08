/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * Diamonds - Tests
 *
 * https://launchschool.com/exercises/02297071
 *
 */

const diamonds = require("./02_diamonds");

describe("Generating a diamond of a given width", () => {
  it("Should throw an error if the argument is < 1", () => {
    expect(() => diamonds.diamond(0)).toThrow(TypeError);
  });

  it("Should throw an error if the argument is an even integer", () => {
    expect(() => diamonds.diamond(2)).toThrow(TypeError);
  });

  it("Should return '*' if the argument is 1", () => {
    expect(diamonds.diamond(1)).toEqual("*");
  });

  it("Should return a diamond of width 3 if the argument is 3", () => {
    expect(diamonds.diamond(3)).toEqual(
      " * \n" +
      "***\n" +
      " * "
    );
  });

  it("Should return a diamond of width 5 if the argument is 5", () => {
    expect(diamonds.diamond(5)).toEqual(
      "  *  \n" +
      " *** \n" +
      "*****\n" +
      " *** \n" +
      "  *  "
    );
  });

  it("Should return a diamond of width 9 if the argument is 9", () => {
    expect(diamonds.diamond(9)).toEqual(
      "    *    \n" +
      "   ***   \n" +
      "  *****  \n" +
      " ******* \n" +
      "*********\n" +
      " ******* \n" +
      "  *****  \n" +
      "   ***   \n" +
      "    *    "
    );
  });
});
