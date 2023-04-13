/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Cute Angles - Tests
 *
 * https://launchschool.com/exercises/45794622
 *
 */

const cuteAngles = require("./01_cute_angles");

describe("Converting an angle to degrees, minutes, and seconds", () => {
  it("Should have zero minutes and seconds for an integer angle", () => {
    expect(cuteAngles.dms(180)).toBe(`180°00'00"`);
  });

  it("Should not pad zeros for the degrees portion", () => {
    expect(cuteAngles.dms(0)).toBe(`0°00'00"`);
    expect(cuteAngles.dms(30)).toBe(`30°00'00"`);
    expect(cuteAngles.dms(55)).toBe(`55°00'00"`);
  });

  it("Should pad zeros for the minutes portion", () => {
    expect(cuteAngles.dms(30.05)).toBe(`30°03'00"`);
    expect(cuteAngles.dms(30.03)).toBe(`30°01'48"`);
  });

  it("Should pad zeros for the seconds portion", () => {
    expect(cuteAngles.dms(30.001)).toBe(`30°00'04"`);
  });

  it("minutes should roll over to degrees", () => {
    expect(cuteAngles.dms(10.9998)).toBe(`10°59'59"`);
    expect(cuteAngles.dms(10.9999)).toBe(`11°00'00"`);
  });

  it("seconds should roll over to minutes", () => {
    expect(cuteAngles.dms(30.5996)).toBe(`30°35'59"`);
    expect(cuteAngles.dms(30.6)).toBe(`30°36'00"`);
  });

  it("should calculate the correct result for other values in [0, 360]", () => {
    expect(cuteAngles.dms(76.73)).toBe(`76°43'48"`);
    expect(cuteAngles.dms(254.6)).toBe(`254°36'00"`);
    expect(cuteAngles.dms(93.034773)).toBe(`93°02'05"`);
    expect(cuteAngles.dms(0.00001)).toBe(`0°00'00"`);
    expect(cuteAngles.dms(360)).toBe(`360°00'00"`);
  });

  it("should calculate the correct result for negative values in [-360, 0]", () => {
    expect(cuteAngles.dms(-76.73)).toBe(`-76°43'48"`);
    expect(cuteAngles.dms(-254.6)).toBe(`-254°36'00"`);
    expect(cuteAngles.dms(-93.034773)).toBe(`-93°02'05"`);
    expect(cuteAngles.dms(-360)).toBe(`-360°00'00"`);
  });

  it("should return an unsigned zero string for an approximate negative zero", () => {
    expect(cuteAngles.dms(-0.00001)).toBe(`0°00'00"`);
  });
});
