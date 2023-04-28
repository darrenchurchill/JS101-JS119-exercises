/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Double Char (Part 1) - Tests
 *
 * https://launchschool.com/exercises/b04f40e2
 *
 */

const repeater = require("./01_double_char_pt1");

describe("Repeating each character in a string", () => {
  it("Given 'Hello', should return 'HHeelllloo'", () => {
    expect(repeater.repeater("Hello")).toBe("HHeelllloo");
  });

  it("Given 'Good job!', should return 'GGoooodd  jjoobb!!'", () => {
    expect(repeater.repeater("Good job!")).toBe("GGoooodd  jjoobb!!");
  });

  it("Given '', should return ''", () => {
    expect(repeater.repeater("")).toBe("");
  });
});
