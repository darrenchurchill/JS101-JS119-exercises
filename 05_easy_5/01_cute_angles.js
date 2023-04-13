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

function dms(angle) {
  let remainder = Math.round(angle * 60 * 60);  // current units: seconds

  let seconds = remainder % 60;
  remainder = (remainder - seconds) / 60;  // current units: minutes

  let minutes = remainder % 60;
  remainder = (remainder - minutes) / 60;  // current units: degrees

  let degrees = remainder;

  return (
    `${degrees}°` +
    `${`${minutes}`.padStart(2, "0")}'` +
    `${`${seconds}`.padStart(2, "0")}"`
  );
}

module.exports = {
  dms,
};
