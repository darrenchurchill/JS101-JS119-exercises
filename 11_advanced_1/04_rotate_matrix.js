/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Rotate Matrix
 *
 * https://launchschool.com/exercises/2ff0fcf7
 *
 */


/**
 * Given a matrix, a 2D array, return a new array, the original matrix rotated
 * 90 degrees clockwise.
 * @param {Array<Array<>>} matrix the matrix to rotate
 * @returns {Array<Array<>>} the rotated matrix
 */
function rotate90(matrix) {
  if (!Array.isArray(matrix)) throw new TypeError("Argument must be an array");

  let result = [];

  for (let index = matrix.length - 1; index >= 0; index--) {
    let row = matrix[index];
    if (!Array.isArray(row)) throw new TypeError(`Row ${row} is not an array`);

    if (result.length === 0) {
      result.push([]); // Case for an empty matrix (matrix[0].length === 0)
      for (let _ = 1; _ < row.length; _++) result.push([]);
    } else if (row.length !== result.length) {
      throw new TypeError("Matrix is not rectangular");
    }

    row.forEach((element, index) => result[index].push(element));
  }

  return result;
}

module.exports = {
  rotate90,
};