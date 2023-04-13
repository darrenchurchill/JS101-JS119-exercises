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
  let degrees = Math.floor(angle);
  let minutes = (angle - degrees) * 60;
  let seconds = Math.round((minutes - Math.floor(minutes)) * 60);

  minutes = Math.floor(minutes);
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    degrees += 1;
  }

  return (
    `${degrees}°` +
    `${`${minutes}`.padStart(2, "0")}'` +
    `${`${seconds}`.padStart(2, "0")}"`
  );
}

module.exports = {
  dms,
};
