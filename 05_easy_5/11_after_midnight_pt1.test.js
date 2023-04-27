/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * After Midnight (Part 1) - Tests
 *
 * https://launchschool.com/exercises/a8ee10fc
 *
 */

const afterMidnight = require("./11_after_midnight_pt1");

describe("Converting minutes after midnight to a string representation of the time", () => {
  describe("Midnight +/- 1 minutes", () => {
    it("Given 0, should return 00:00", () => {
      expect(afterMidnight.timeOfDay(0)).toBe("00:00");
    });

    it("Given 1, should return 00:01", () => {
      expect(afterMidnight.timeOfDay(1)).toBe("00:01");
    });

    it("Given -1, should return 23:59", () => {
      expect(afterMidnight.timeOfDay(-1)).toBe("23:59");
    });

    it("Given 1440, should return 00:00", () => {
      expect(afterMidnight.timeOfDay(1440)).toBe("00:00");
    });

    it("Given 1441, should return 00:01", () => {
      expect(afterMidnight.timeOfDay(1441)).toBe("00:01");
    });

    it("Given 1439, should return 23:59", () => {
      expect(afterMidnight.timeOfDay(1439)).toBe("23:59");
    });

    it("Given -1440, should return 00:00", () => {
      expect(afterMidnight.timeOfDay(-1440)).toBe("00:00");
    });

    it("Given -1439, should return 00:01", () => {
      expect(afterMidnight.timeOfDay(-1439)).toBe("00:01");
    });

    it("Given -1441, should return 23:59", () => {
      expect(afterMidnight.timeOfDay(-1441)).toBe("23:59");
    });
  });

  describe("Positive minutes", () => {
    it("Given 35, should return 00:35", () => {
      expect(afterMidnight.timeOfDay(35)).toBe("00:35");
    });

    it("Given 60, should return 01:00", () => {
      expect(afterMidnight.timeOfDay(60)).toBe("01:00");
    });

    it("Given 120, should return 02:00", () => {
      expect(afterMidnight.timeOfDay(120)).toBe("02:00");
    });

    it("Given 800, should return 13:20", () => {
      expect(afterMidnight.timeOfDay(800)).toBe("13:20");
    });

    it("Given 3000, should return 02:00", () => {
      expect(afterMidnight.timeOfDay(3000)).toBe("02:00");
    });
  });

  describe("Negative minutes", () => {
    it("Given -3, should return 23:57", () => {
      expect(afterMidnight.timeOfDay(-3)).toBe("23:57");
    });

    it("Given -1437, should return 00:03", () => {
      expect(afterMidnight.timeOfDay(-1437)).toBe("00:03");
    });

    it("Given -4231, should return 01:29", () => {
      expect(afterMidnight.timeOfDay(-4231)).toBe("01:29");
    });
  });
});
