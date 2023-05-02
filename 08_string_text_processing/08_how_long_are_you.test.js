/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * How Long are You? - Tests
 *
 * https://launchschool.com/exercises/82ac0837
 *
 */

const howLongAreYou = require("./08_how_long_are_you");

describe("Generating array of words and their lengths", () => {
  it("Should return an empty array when given an empty string", () => {
    expect(howLongAreYou.wordLengths("")).toEqual([]);
  });

  it("Should return an empty array when given `undefined`", () => {
    expect(howLongAreYou.wordLengths()).toEqual([]);
  });

  it("Should return an array of words and their lengths", () => {
    expect(howLongAreYou.wordLengths("cow sheep chicken")).toEqual([
      "cow 3",
      "sheep 5",
      "chicken 7",
    ]);

    expect(howLongAreYou.wordLengths("baseball hot dogs and apple pie")).toEqual([
      "baseball 8",
      "hot 3",
      "dogs 4",
      "and 3",
      "apple 5",
      "pie 3",
    ]);

    expect(howLongAreYou.wordLengths("It ain't easy, is it?")).toEqual([
      "It 2",
      "ain't 5",
      "easy, 5",
      "is 2",
      "it? 3",
    ]);

    expect(howLongAreYou.wordLengths("Supercalifragilisticexpialidocious")).toEqual([
      "Supercalifragilisticexpialidocious 34",
    ]);
  });
});
