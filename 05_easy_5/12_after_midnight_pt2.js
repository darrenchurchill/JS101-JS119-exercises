/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 5
 *
 * After Midnight (Part 2)
 *
 * https://launchschool.com/exercises/4533932c
 *
 */

const MIN_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MIN_PER_DAY = HOURS_PER_DAY * MIN_PER_HOUR; // 1440


/**
 * Given a string representing the time of day in 24 hour format, return the
 * number of minutes after midnight.
 * @param {String} time the time of day in 24 hour format, "hh:mm"
 * @returns the number of minutes after midnight
 */
function afterMidnight(time) {
  time = time.split(":").map((num) => Number(num));
  let hours = time[0] % HOURS_PER_DAY;
  let minutes = time[1];

  return (hours * MIN_PER_HOUR) + minutes;
}

/**
 * Given a string representing the time of day in 24 hour format, return the
 * number of minutes before midnight.
 * @param {String} time the time of day in 24 hour format, "hh:mm"
 * @returns the number of minutes before midnight
 */
function beforeMidnight(time) {
  let minutes = MIN_PER_DAY - afterMidnight(time);
  return minutes === MIN_PER_DAY ? 0 : minutes;
}

module.exports = {
  afterMidnight,
  beforeMidnight,
};
