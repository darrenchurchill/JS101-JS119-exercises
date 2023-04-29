/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Name Swapping
 *
 * https://launchschool.com/exercises/815cc58f
 *
 */


/**
 * Given a string containing a name in the format of "firstName lastName",
 * return a string containing the name in the format of "lastName, firstName".
 * @param {String} name a name in the format of "firstName lastName"
 * @returns {String} the name in the format of "lastName, firstName"
 */
function swapName(name) {
  name = name.trim();
  return name.split(" ").filter((name) => name !== "").reverse().join(", ");
}

module.exports = {
  swapName,
};
