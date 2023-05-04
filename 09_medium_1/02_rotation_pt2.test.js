/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Rotation (Part 2) - Tests
 *
 * https://launchschool.com/exercises/38185d87
 *
 */

const rotation = require("./02_rotation_pt2");

describe("Rotating the `count`th digit from the end of a `number`", () => {
  it("Should return the same number if `count` is 1", () => {
    expect(rotation.rotateRightmostDigits(12345, 1)).toBe(12345);
    expect(rotation.rotateRightmostDigits(-12345, 1)).toBe(-12345);
  });

  it("Should throw an error if `count` is greater than the number of digits in `number`", () => {
    expect(() => rotation.rotateRightmostDigits(12345, 6)).toThrow();
    expect(() => rotation.rotateRightmostDigits(-12345, 6)).toThrow();
  });

  it("Should throw an error if `count` is less than 1", () => {
    expect(() => rotation.rotateRightmostDigits(12345, 0)).toThrow();
    expect(() => rotation.rotateRightmostDigits(-12345, 0)).toThrow();
    expect(() => rotation.rotateRightmostDigits(12345, -1)).toThrow();
    expect(() => rotation.rotateRightmostDigits(-12345, -1)).toThrow();
  });

  it("Should rotate the `count`th digit from the end of a positive `number` to the end of `number`", () => {
    expect(rotation.rotateRightmostDigits(12345, 2)).toBe(12354);
    expect(rotation.rotateRightmostDigits(12345, 3)).toBe(12453);
    expect(rotation.rotateRightmostDigits(12345, 4)).toBe(13452);
    expect(rotation.rotateRightmostDigits(12345, 5)).toBe(23451);
  });

  it("Should rotate the `count`th digit from the end of a negative `number` to the end of `number`", () => {
    expect(rotation.rotateRightmostDigits(-12345, 2)).toBe(-12354);
    expect(rotation.rotateRightmostDigits(-12345, 3)).toBe(-12453);
    expect(rotation.rotateRightmostDigits(-12345, 4)).toBe(-13452);
    expect(rotation.rotateRightmostDigits(-12345, 5)).toBe(-23451);
  });
});
