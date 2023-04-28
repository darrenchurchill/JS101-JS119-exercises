/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * After Midnight (Part 2) - Tests
 *
 * https://launchschool.com/exercises/4533932c
 *
 */

const afterMidnight = require("./12_after_midnight_pt2");

describe("Converting a 24 hr string time to minutes after midnight", () => {
  it("Given 00:00, should return 0", () => {
    expect(afterMidnight.afterMidnight("00:00")).toBe(0);
  });

  it("Given 00:01, should return 1", () => {
    expect(afterMidnight.afterMidnight("00:01")).toBe(1);
  });

  it("Given 12:34, should return 754", () => {
    expect(afterMidnight.afterMidnight("12:34")).toBe(754);
  });

  it("Given 24:00, should return 0", () => {
    expect(afterMidnight.afterMidnight("24:00")).toBe(0);
  });
});

describe("Converting a 24 hr string time to minutes before midnight", () => {
  it("Given 00:00, should return 0", () => {
    expect(afterMidnight.beforeMidnight("00:00")).toBe(0);
  });

  it("Given 00:01, should return 1439", () => {
    expect(afterMidnight.beforeMidnight("00:01")).toBe(1439);
  });

  it("Given 12:34, should return 686", () => {
    expect(afterMidnight.beforeMidnight("12:34")).toBe(686);
  });

  it("Given 24:00, should return 0", () => {
    expect(afterMidnight.beforeMidnight("24:00")).toBe(0);
  });
});
