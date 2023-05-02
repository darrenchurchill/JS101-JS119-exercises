/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Staggered Caps (Part 1) - Tests
 *
 * https://launchschool.com/exercises/3b0a4549
 *
 */

const staggeredCaps = require("./06_staggered_caps_pt1");

describe("Alternating capitalization of a string", () => {
  it("Should return an empty string when given an empty string", () => {
    expect(staggeredCaps.staggeredCase("")).toBe("");
  });

  it("Should not modify non-alphabetic characters", () => {
    expect(staggeredCaps.staggeredCase("123")).toBe("123");
    expect(staggeredCaps.staggeredCase(" ")).toBe(" ");
    expect(staggeredCaps.staggeredCase(".,?!/(){}[]")).toBe(".,?!/(){}[]");
  });

  it("Should return a string with every other character capitalized", () => {
    expect(staggeredCaps.staggeredCase("I Love Launch School!")).toBe(
      "I LoVe lAuNcH ScHoOl!"
    );
  });

  it("Should consider non-alphabetic characters when alternating capitalization", () => {
    expect(staggeredCaps.staggeredCase("ALL_CAPS")).toBe("AlL_CaPs");
    expect(staggeredCaps.staggeredCase("ignore 77 the 444 numbers")).toBe(
      "IgNoRe 77 ThE 444 NuMbErS"
    );
  });
});
