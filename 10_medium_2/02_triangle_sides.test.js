/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Triangle Sides - Tests
 *
 * https://launchschool.com/exercises/b932118f
 *
 */

const triangleSides = require("./02_triangle_sides");

describe("Determining the type of a triangle from 3 side lengths", () => {
  it("Should return 'invalid' if any side length is zero", () => {
    expect(triangleSides.triangle(0, 3, 3)).toBe("invalid");
    expect(triangleSides.triangle(3, 0, 3)).toBe("invalid");
    expect(triangleSides.triangle(3, 3, 0)).toBe("invalid");
  });

  it("Should return 'invalid' if any side length is negative", () => {
    expect(triangleSides.triangle(-1, 3, 3)).toBe("invalid");
    expect(triangleSides.triangle(3, -1, 3)).toBe("invalid");
    expect(triangleSides.triangle(3, 3, -1)).toBe("invalid");
  });

  it("Should return 'invalid' if the two shortest sides' sum is less than the longest", () => {
    expect(triangleSides.triangle(1, 1, 3)).toBe("invalid");
    expect(triangleSides.triangle(1, 3, 1)).toBe("invalid");
    expect(triangleSides.triangle(3, 1, 1)).toBe("invalid");
  });

  it("Should return 'invalid' if the two shortest sides' sum is equal to the longest", () => {
    expect(triangleSides.triangle(2, 2, 4)).toBe("invalid");
    expect(triangleSides.triangle(2, 4, 2)).toBe("invalid");
    expect(triangleSides.triangle(4, 2, 2)).toBe("invalid");
  });

  it("Should return 'equilateral' if all sides are equal", () => {
    expect(triangleSides.triangle(1, 1, 1)).toBe("equilateral");
  });

  it("Should return 'isosceles' if two sides are equal", () => {
    expect(triangleSides.triangle(2, 2, 3)).toBe("isosceles");
    expect(triangleSides.triangle(2, 3, 2)).toBe("isosceles");
    expect(triangleSides.triangle(3, 2, 2)).toBe("isosceles");
    expect(triangleSides.triangle(3, 3, 1.5)).toBe("isosceles");
    expect(triangleSides.triangle(3, 1.5, 3)).toBe("isosceles");
    expect(triangleSides.triangle(1.5, 3, 3)).toBe("isosceles");
  });

  it("Should return 'scalene' if no sides are equal", () => {
    expect(triangleSides.triangle(2, 3, 4)).toBe("scalene");
  });
});
