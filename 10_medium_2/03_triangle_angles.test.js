/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Triangle Angles - Tests
 *
 * https://launchschool.com/exercises/4a3e10a1
 *
 */

const triangleAngles = require("./03_triangle_angles");

describe("Determining a triangle's type from 3 angles", () => {
  it("Should return 'invalid' if any angle is zero", () => {
    expect(triangleAngles.triangle(0, 3, 3)).toBe("invalid");
    expect(triangleAngles.triangle(3, 0, 3)).toBe("invalid");
    expect(triangleAngles.triangle(3, 3, 0)).toBe("invalid");
  });

  it("Should return 'invalid' if any angle is negative", () => {
    expect(triangleAngles.triangle(-1, 3, 3)).toBe("invalid");
    expect(triangleAngles.triangle(3, -1, 3)).toBe("invalid");
    expect(triangleAngles.triangle(3, 3, -1)).toBe("invalid");
  });

  it("Should return 'invalid' if the three angles' sum is not exactly 180", () => {
    expect(triangleAngles.triangle(1, 1, 1)).toBe("invalid");
    expect(triangleAngles.triangle(90, 90, 90)).toBe("invalid");
    expect(triangleAngles.triangle(50, 50, 50)).toBe("invalid");
  });

  it("Should return 'right' if one angle is exactly 90", () => {
    expect(triangleAngles.triangle(90, 30, 60)).toBe("right");
    expect(triangleAngles.triangle(30, 90, 60)).toBe("right");
    expect(triangleAngles.triangle(30, 60, 90)).toBe("right");
  });

  it("Should return 'acute' if all angles are less than 90", () => {
    expect(triangleAngles.triangle(60, 70, 50)).toBe("acute");
  });

  it("Should return 'obtuse' if one angle is greater than 90", () => {
    expect(triangleAngles.triangle(100, 30, 50)).toBe("obtuse");
    expect(triangleAngles.triangle(30, 100, 50)).toBe("obtuse");
    expect(triangleAngles.triangle(30, 50, 100)).toBe("obtuse");
  });
});
