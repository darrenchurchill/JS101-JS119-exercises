/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a Signed Number to a String - Tests
 *
 * https://launchschool.com/exercises/88da7344
 *
 */

const signedIntegerToString = require("./12_convert_signed_number_to_string");

describe("signedIntegerToString", () => {
  it("should convert a signed integer to a string", () => {
    expect(signedIntegerToString.signedIntegerToString(4321)).toBe("+4321");
    expect(signedIntegerToString.signedIntegerToString(0)).toBe("0");
    expect(signedIntegerToString.signedIntegerToString(-0)).toBe("-0");
    expect(signedIntegerToString.signedIntegerToString(-123)).toBe("-123");
    expect(signedIntegerToString.signedIntegerToString(5000)).toBe("+5000");
    expect(signedIntegerToString.signedIntegerToString(1234567890)).toBe(
      "+1234567890"
    );
  });
});
