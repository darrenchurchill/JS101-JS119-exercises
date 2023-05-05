/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 2
 *
 * Triangle Angles
 *
 * https://launchschool.com/exercises/4a3e10a1
 *
 */


/**
 * Given three numbers, representing three angles of a triangle, return a string
 * representing the type of triangle, or "invalid" if the angles do not
 * represent a valid triangle.
 * @param {Number} angle1 the first angle
 * @param {Number} angle2 the second angle
 * @param {Number} angle3 the third angle
 * @returns {String} the type of triangle, or "invalid" if the angles do not
 * represent a valid triangle
 */
function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3].sort((a, b) => a - b);

  if (angles[0] <= 0 || angles.reduce((sum, angle) => sum + angle) !== 180) {
    return "invalid";
  }
  if (angles.some((angle) => angle === 90)) return "right";
  if (angles.every((angle) => angle < 90)) return "acute";
  return "obtuse";
}

module.exports = {
  triangle,
};
