/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Unlucky Days - Tests
 *
 * https://launchschool.com/exercises/071f5a1a
 *
 */

const unluckyDays = require("./04_unlucky_days");

describe("Calculating the number of Friday the 13ths in a given year", () => {
  it("Should return 1 for 1986", () => {
    expect(unluckyDays.fridayThe13ths(1986)).toBe(1);
  });

  it("Should return 3 for 2015", () => {
    expect(unluckyDays.fridayThe13ths(2015)).toBe(3);
  });

  it("Should return 2 for 2017", () => {
    expect(unluckyDays.fridayThe13ths(2017)).toBe(2);
  });
});
