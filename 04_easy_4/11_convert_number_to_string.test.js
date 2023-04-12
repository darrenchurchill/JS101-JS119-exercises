/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 4
 *
 * Convert a Number to a String - Tests
 *
 * https://launchschool.com/exercises/74a19009
 *
 */

const integerToString = require("./11_convert_number_to_string");

describe("integerToString", () => {
  it("should convert a positive integer to a string", () => {
    expect(integerToString.integerToString(4321)).toBe("4321");
    expect(integerToString.integerToString(0)).toBe("0");
    expect(integerToString.integerToString(5000)).toBe("5000");
    expect(integerToString.integerToString(1234567890)).toBe("1234567890");
  });
});
