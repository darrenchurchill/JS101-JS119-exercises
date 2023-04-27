/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * After Midnight (Part 1)
 *
 * https://launchschool.com/exercises/a8ee10fc
 *
 */

/**
 * Given an integer representing the time of day, in minutes, before or after
 * midnight, return a string representation of the time of day in 24 hour
 * format, "hh:mm".
 * @param {Number} minAfterMidnight the time of day, min before/after midnight
 * @returns the time of day in 24 hour format, "hh:mm"
 */
function timeOfDay(minAfterMidnight) {
  const MIN_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MIN_PER_DAY = HOURS_PER_DAY * MIN_PER_HOUR; // 1440

  // Normalize to range (-MIN_PER_DAY, MIN_PER_DAY)
  minAfterMidnight =
    Math.sign(minAfterMidnight) * (Math.abs(minAfterMidnight) % MIN_PER_DAY);

  // Normalize to range [0, MIN_PER_DAY)
  if (minAfterMidnight < 0) minAfterMidnight = MIN_PER_DAY + minAfterMidnight;

  let minutes = minAfterMidnight % MIN_PER_HOUR;
  minAfterMidnight -= minutes;
  let hours = minAfterMidnight / MIN_PER_HOUR;

  return `${`${hours}`.padStart(2, "0")}:${`${minutes}`.padStart(2, "0")}`;
}

module.exports = {
  timeOfDay,
};
