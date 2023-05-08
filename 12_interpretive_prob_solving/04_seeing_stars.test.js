/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * Seeing Stars - Tests
 *
 * https://launchschool.com/exercises/e41ecf03
 *
 */

const seeingStars = require("./04_seeing_stars");

describe("Generating a star of a given width", () => {
  it("Should throw an error if the argument is < 7", () => {
    expect(() => seeingStars.star(6)).toThrow(TypeError);
  });

  it("Should throw an error if the argument is an even integer", () => {
    expect(() => seeingStars.star(8)).toThrow(TypeError);
  });

  it("Should return a star of width 7 if the argument is 7", () => {
    expect(seeingStars.star(7)).toEqual(
      "*  *  *\n" +
      " * * * \n" +
      "  ***  \n" +
      "*******\n" +
      "  ***  \n" +
      " * * * \n" +
      "*  *  *"
    );
  });

  it("Should return a star of width 9 if the argument is 9", () => {
    expect(seeingStars.star(9)).toEqual(
      "*   *   *\n" +
      " *  *  * \n" +
      "  * * *  \n" +
      "   ***   \n" +
      "*********\n" +
      "   ***   \n" +
      "  * * *  \n" +
      " *  *  * \n" +
      "*   *   *"
    );
  });
});
