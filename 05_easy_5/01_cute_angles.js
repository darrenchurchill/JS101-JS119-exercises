/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * Cute Angles
 *
 * https://launchschool.com/exercises/45794622
 *
 */

/**
 * Given a floating point angle, return a the angle's string representation in
 * degrees, minutes, and seconds.
 * @param {number} angle the angle to convert
 * @returns {string} a string representation of the angle in degrees, minutes,
 *                   and seconds.
 */
function dms(angle) {
  let sign = angle >= 0 ? "" : "-";
  angle = Math.abs(angle);

  let remainder = Math.round(angle * 60 * 60);  // current units: seconds

  let seconds = remainder % 60;
  remainder = (remainder - seconds) / 60;  // current units: minutes

  let minutes = remainder % 60;
  remainder = (remainder - minutes) / 60;  // current units: degrees

  let degrees = remainder;
  if (degrees === 0 && minutes === 0 && seconds === 0) sign = "";

  return (
    `${sign}${degrees}°` +
    `${`${minutes}`.padStart(2, "0")}'` +
    `${`${seconds}`.padStart(2, "0")}"`
  );
}

module.exports = {
  dms,
};
