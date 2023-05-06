/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Rotate Matrix - Tests
 *
 * https://launchschool.com/exercises/2ff0fcf7
 *
 */

const rotateMatrix = require("./04_rotate_matrix");

describe("Rotate a matrix 90 degrees clockwise", () => {
  it("Should throw an error if the argument is not an array", () => {
    expect(() => rotateMatrix.rotate90("Hello World!")).toThrow(TypeError);
  });

  it("Should throw an error if the argument is not a matrix", () => {
    expect(() => rotateMatrix.rotate90([1, 2, 3])).toThrow(TypeError);
  });

  it("Should throw an error if the matrix is not rectangular", () => {
    expect(() =>
      rotateMatrix.rotate90([
        [1, 2],
        [3, 4, 5],
      ])
    ).toThrow(TypeError);
  });

  it("Should return a new array", () => {
    let matrix = [
      [1, 2],
      [3, 4],
    ];
    let rotated = rotateMatrix.rotate90(matrix);
    expect(rotated).not.toBe(matrix);
  });

  it("Should return an empty matrix if the matrix is empty", () => {
    expect(rotateMatrix.rotate90([])).toEqual([]);
    expect(rotateMatrix.rotate90([[]])).toEqual([[]]);
  });

  it("Should return an equivalent matrix if the matrix is 1x1", () => {
    expect(rotateMatrix.rotate90([[1]])).toEqual([[1]]);
  });

  it("Should return a 1 column matrix if the given matrix is 1 row", () => {
    expect(rotateMatrix.rotate90([[1, 2, 3]])).toEqual([[1], [2], [3]]);
  });

  it("Should return a 1 row matrix if the given matrix is 1 column", () => {
    expect(rotateMatrix.rotate90([[1], [2], [3]])).toEqual([[3, 2, 1]]);
  });

  it("Should return an equivalent matrix if the matrix is rotated 4 times (360 degrees)", () => {
    let matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(
      rotateMatrix.rotate90(
        rotateMatrix.rotate90(
          rotateMatrix.rotate90(
            rotateMatrix.rotate90(matrix)
          )
        )
      )
    ).toEqual(matrix);
  });

  it("Should return a matrix rotated 90 degrees clockwise", () => {
    expect(
      rotateMatrix.rotate90([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([
      [4, 1],
      [5, 2],
      [6, 3],
    ]);

    expect(
      rotateMatrix.rotate90([
        [1, 5, 8],
        [4, 7, 2],
        [3, 9, 6],
      ])
    ).toEqual([
      [3, 4, 1],
      [9, 7, 5],
      [6, 2, 8],
    ]);
  });
});
