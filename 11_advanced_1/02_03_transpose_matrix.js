/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Advanced 1
 *
 * Transpose Matrix
 *
 * 2 links (3x3 matrix & MxN matrix):
 * https://launchschool.com/exercises/144fa402
 * https://launchschool.com/exercises/3c3909e4
 *
 */


/**
 * Given a matrix, a 2D array, return a new array containing the matrix's
 * transpose.
 * @param {Array<Array<>>} matrix the matrix to transpose
 * @returns {Array<Array<>>} the transposed matrix
 */
function transpose(matrix) {
  if (!Array.isArray(matrix)) throw new TypeError("Argument must be an array");

  let result = [];

  matrix.forEach((row) => {
    if (!Array.isArray(row)) throw new TypeError(`Row ${row} is not an array`);

    if (result.length === 0) {
      result.push([]); // Case for an empty matrix (matrix[0].length === 0)
      for (let _ = 1; _ < row.length; _++) result.push([]);
    } else if (row.length !== result.length) {
      throw new TypeError("Matrix is not rectangular");
    }

    row.forEach((element, index) => result[index].push(element));
  });

  return result;
}

module.exports = {
  transpose,
};
