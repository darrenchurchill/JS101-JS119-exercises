/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Lettercase Percentage Ratio - Tests
 *
 * https://launchschool.com/exercises/71983fb9
 *
 */

const lettercasePercentageRatio = require("./01_lettercase_percentage_ratio");

describe("Calculating the percentage of uppercase, lowercase, and non-letters", () => {
  it("Should return an object with all zero values if the string is empty", () => {
    expect(lettercasePercentageRatio.letterPercentages("")).toEqual({
      lowercase: "0.00",
      uppercase: "0.00",
      neither: "0.00",
    });
  });

  it("Should return an object with a lowercase property", () => {
    expect(lettercasePercentageRatio.letterPercentages("abc")).toHaveProperty(
      "lowercase"
    );
  });

  it("Should return an object with an uppercase property", () => {
    expect(lettercasePercentageRatio.letterPercentages("abc")).toHaveProperty(
      "uppercase"
    );
  });

  it("Should return an object with a neither property", () => {
    expect(lettercasePercentageRatio.letterPercentages("abc")).toHaveProperty(
      "neither"
    );
  });

  it("Should return an object with lowercase === zero if the string is all uppercase", () => {
    expect(lettercasePercentageRatio.letterPercentages("ABC")).toMatchObject({
      lowercase: "0.00",
    });
  });

  it("Should return an object with uppercase === zero if the string is all lowercase", () => {
    expect(lettercasePercentageRatio.letterPercentages("abc")).toMatchObject({
      uppercase: "0.00",
    });
  });

  it("Should return an object with neither === zero if the string is all letters", () => {
    expect(lettercasePercentageRatio.letterPercentages("aBc")).toMatchObject({
      neither: "0.00",
    });
  });
});
