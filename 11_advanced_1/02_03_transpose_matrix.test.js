/* eslint-disable max-lines-per-function */
/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Transpose Matrix - Tests
 *
 * 2 links (3x3 matrix & MxN matrix):
 * https://launchschool.com/exercises/144fa402
 * https://launchschool.com/exercises/3c3909e4
 *
 */

const transposeMatrix = require("./02_03_transpose_matrix");

describe("Transpose a matrix", () => {
  it("Should throw an error if the argument is not an array", () => {
    expect(() => transposeMatrix.transpose("Hello World!")).toThrow(TypeError);
  });

  it("Should throw an error if the argument is not a matrix", () => {
    expect(() => transposeMatrix.transpose([1, 2, 3])).toThrow(TypeError);
  });

  it("Should throw an error if the matrix is not rectangular", () => {
    expect(() =>
      transposeMatrix.transpose([
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
    let transposed = transposeMatrix.transpose(matrix);
    expect(transposed).not.toBe(matrix);
  });

  it("Should return an empty matrix if the matrix is empty", () => {
    expect(transposeMatrix.transpose([])).toEqual([]);
    expect(transposeMatrix.transpose([[]])).toEqual([[]]);
  });

  it("Should return an equivalent matrix if the matrix is 1x1", () => {
    expect(transposeMatrix.transpose([[1]])).toEqual([[1]]);
  });

  it("Should return a 1 column matrix if the given matrix is 1 row", () => {
    expect(transposeMatrix.transpose([[1, 2, 3]])).toEqual([[1], [2], [3]]);
  });

  it("Should return a 1 row matrix if the given matrix is 1 column", () => {
    expect(transposeMatrix.transpose([[1], [2], [3]])).toEqual([[1, 2, 3]]);
  });

  it("Should return a transposed matrix", () => {
    expect(
      transposeMatrix.transpose([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ])
    ).toEqual([
      [1, 5],
      [2, 6],
      [3, 7],
      [4, 8],
    ]);

    expect(
      transposeMatrix.transpose([
        [1, 5, 8],
        [4, 7, 2],
        [3, 9, 6],
      ])
    ).toEqual([
      [1, 4, 3],
      [5, 7, 9],
      [8, 2, 6],
    ]);
  });
});
