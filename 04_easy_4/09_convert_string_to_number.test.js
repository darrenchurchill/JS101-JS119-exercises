/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a String to a Number - Tests
 *
 * https://launchschool.com/exercises/dd7af4f0
 *
 */

const stringToInteger = require("./09_convert_string_to_number");

describe("stringToInteger", () => {
  it("converts a string of numeric characters to an integer", () => {
    expect(stringToInteger.stringToInteger("4321")).toBe(4321);
    expect(stringToInteger.stringToInteger("570")).toBe(570);
  });
});
