/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * String and Text Processing
 *
 * Swap Case - Tests
 *
 * https://launchschool.com/exercises/7d7dbbbe
 *
 */

const swapCase = require("./05_swap_case");

describe("Swapping the case of each letter in a string", () => {
  it("Should return an empty string when given an empty string", () => {
    expect(swapCase.swapCase("")).toBe("");
  });

  it("Should not modify non-alphabetic characters", () => {
    expect(swapCase.swapCase("123")).toBe("123");
    expect(swapCase.swapCase(" ")).toBe(" ");
    expect(swapCase.swapCase(".,?!/(){}[]")).toBe(".,?!/(){}[]");
  });

  it("Should return a string with each letter's case swapped", () => {
    expect(swapCase.swapCase("CamelCase")).toBe("cAMELcASE");
    expect(swapCase.swapCase("Tonight on XYZ-TV")).toBe("tONIGHT ON xyz-tv");
  });
});
