/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a String to a Signed Number - Tests
 *
 * https://launchschool.com/exercises/caa46064
 *
 */

const stringToInteger = require("./10_convert_string_to_signed_number");

describe("stringToInteger", () => {
  it("converts a string of numeric characters to an integer", () => {
    expect(stringToInteger.stringToSignedInteger("4321")).toBe(4321);
    expect(stringToInteger.stringToSignedInteger("-570")).toBe(-570);
    expect(stringToInteger.stringToSignedInteger("+570")).toBe(570);
    expect(stringToInteger.stringToSignedInteger("+100")).toBe(100);
  });
});
