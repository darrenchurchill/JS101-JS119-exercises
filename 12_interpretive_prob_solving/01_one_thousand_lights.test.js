/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Interpretive Problem Solving
 *
 * 1000 Lights - Tests
 *
 * https://launchschool.com/exercises/4dfb6228
 *
 */

const oneThousandLights = require("./01_one_thousand_lights");

describe("Toggling a bank of light switches", () => {
  it("Should throw an error if the argument is < 0", () => {
    expect(() => oneThousandLights.lightsOn(-1)).toThrow(TypeError);
  });

  it("Should return an empty array if the argument is 0", () => {
    expect(oneThousandLights.lightsOn(0)).toEqual([]);
  });

  it("Should return [1] if the argument is 1", () => {
    expect(oneThousandLights.lightsOn(1)).toEqual([1]);
  });

  it("Should return [1, 4] if the argument is 5", () => {
    expect(oneThousandLights.lightsOn(5)).toEqual([1, 4]);
  });

  it("Should return [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] if the argument is 100", () => {
    expect(oneThousandLights.lightsOn(100)).toEqual([
      1, 4, 9, 16, 25, 36, 49, 64, 81, 100
    ]);
  });
});
