/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Rotation (Part 1) - Tests
 *
 * https://launchschool.com/exercises/d00dcc58
 *
 */

const rotation = require("./01_rotation_pt1");

describe("Rotating an Array", () => {
  it("Should return undefined if the argument is not an array", () => {
    expect(rotation.rotateArray("Hello")).toBeUndefined();
    expect(rotation.rotateArray(123)).toBeUndefined();
    expect(rotation.rotateArray(undefined)).toBeUndefined();
  });

  it("Should return an empty array if the argument is an empty array", () => {
    expect(rotation.rotateArray([])).toEqual([]);
  });

  it("Should return a new array", () => {
    let array = [1, 2, 3];
    expect(rotation.rotateArray(array)).not.toBe(array);
  });

  it("Should return an equivalent array if the argument is a single element array", () => {
    expect(rotation.rotateArray([1])).toEqual([1]);
  });

  it("Should return a rotated array if the argument is a multi-element array", () => {
    expect(rotation.rotateArray([1, 2, 3])).toEqual([2, 3, 1]);
  });

  it("Should rotate arrays of all element types", () => {
    expect(rotation.rotateArray([1, "a", [1, 2]])).toEqual(["a", [1, 2], 1]);
  });
});
