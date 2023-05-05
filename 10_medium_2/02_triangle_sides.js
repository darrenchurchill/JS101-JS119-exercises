/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Triangle Sides
 *
 * https://launchschool.com/exercises/b932118f
 *
 */


/**
 * Given three numbers representing the side lengths of a possible triangle,
 * return a string representing the triangle's type, or "invalid" if the sides
 * do not represent a valid triangle.
 * @param {Number} side1 the first side length
 * @param {Number} side2 the second side length
 * @param {Number} side3 the third side length
 * @returns {String} the type of triangle, or "invalid" if the sides do not
 * represent a valid triangle
 */
function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);

  if (sides[0] <= 0 || sides[0] + sides[1] <= sides[2]) return "invalid";
  if (sides[0] === sides[1] && sides[1] === sides[2]) return "equilateral";
  if (sides[0] === sides[1] || sides[1] === sides[2]) return "isosceles";
  return "scalene";
}

module.exports = {
  triangle,
};
