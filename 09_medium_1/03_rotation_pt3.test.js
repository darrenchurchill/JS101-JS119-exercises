/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Rotation (Part 3) - Tests
 *
 * https://launchschool.com/exercises/3d704505
 *
 */

const rotation = require("./03_rotation_pt3");

describe('Performing the "Max Rotation" of a Number\'s Digits', () => {
  it("Should return the same number if the argument is a single digit", () => {
    expect(rotation.maxRotation(1)).toBe(1);
  });

  it("Should remove any leading zeros from the result", () => {
    expect(rotation.maxRotation(105)).toBe(15);
  });

  it("Should perform the max rotation on a multi-digit positive number", () => {
    expect(rotation.maxRotation(735291)).toBe(321579);
    expect(rotation.maxRotation(35)).toBe(53);
    expect(rotation.maxRotation(8703529146)).toBe(7321609845);
  });

  it("Should perform the max rotation on a multi-digit negative number", () => {
    expect(rotation.maxRotation(-735291)).toBe(-321579);
    expect(rotation.maxRotation(-35)).toBe(-53);
    expect(rotation.maxRotation(-8703529146)).toBe(-7321609845);
  });
});
